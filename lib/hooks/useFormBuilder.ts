import { useState, useCallback } from "react";

export interface FormQuestion {
  id: string;
  question: string;
  type: string; // e.g. "text", "number", "choice"
  options?: string[]; // for choice type
}

export interface FormSchema {
  questions: FormQuestion[];
}

export function useFormBuilder(initialSchema?: FormSchema) {
  const [schema, setSchema] = useState<FormSchema>(
    initialSchema ?? { questions: [] }
  );

  const addQuestion = useCallback((question: FormQuestion) => {
    setSchema((prev) => ({
      questions: [...prev.questions, question],
    }));
  }, []);

  const updateQuestion = useCallback((id: string, updated: Partial<FormQuestion>) => {
    setSchema((prev) => ({
      questions: prev.questions.map((q) =>
        q.id === id ? { ...q, ...updated } : q
      ),
    }));
  }, []);

  const removeQuestion = useCallback((id: string) => {
    setSchema((prev) => ({
      questions: prev.questions.filter((q) => q.id !== id),
    }));
  }, []);

  return {
    schema,
    addQuestion,
    updateQuestion,
    removeQuestion,
  };
}