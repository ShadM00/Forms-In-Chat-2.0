import { useReducer } from 'react';

type Question = { label: string; type: string };
type State = { history: Question[][]; index: number };

const initialState: State = { history: [[]], index: 0 };

function reducer(state: State, action: any): State {
  const { history, index } = state;
  switch (action.type) {
    case 'SET':
      const updated = [...history.slice(0, index + 1), action.payload];
      return { history: updated, index: updated.length - 1 };
    case 'UNDO':
      return { ...state, index: Math.max(0, index - 1) };
    case 'REDO':
      return { ...state, index: Math.min(history.length - 1, index + 1) };
    default:
      return state;
  }
}

export function useFormBuilder() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const questions = state.history[state.index];
  const loading = false;

  async function fetchForm(prompt: string) {
    const res = await fetch('/api/agent/form_builder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    try {
      const parsed = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
      dispatch({ type: 'SET', payload: parsed.questions || [] });
    } catch {
      dispatch({ type: 'SET', payload: [] });
    }
  }

  function updateQuestion(index: number, label: string) {
    const updated = [...questions];
    updated[index].label = label;
    dispatch({ type: 'SET', payload: updated });
  }

  return {
    questions,
    fetchForm,
    updateQuestion,
    undo: () => dispatch({ type: 'UNDO' }),
    redo: () => dispatch({ type: 'REDO' }),
    loading
  };
}