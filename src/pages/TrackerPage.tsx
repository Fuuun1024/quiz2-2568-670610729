import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
//import { ModalAdd } from "../components/Modal";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];


  const addItem = (
    id: string,
    name: string,
    amount: number | string,
    category: string
  ) => {
    const newItem: Expense = {
      id: uuidv4(),
      name,
      amount,
      category,
    };
    setExpenses((prev) => [...prev, newItem]);
  };

  const deleteTask = (itemId: string) => {
    setExpenses((prev) => prev.filter((t) => t.id !== itemId));
  };

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button
        onClick={() => setOpened(true)}
      >Add Expense Item</Button>
      {/* <ModalAdd
          opened={opened}
          onClose={() => setOpened(false)}
      ></ModalAdd> */}
      {/* Type additional AddExpenseModal here. */}

      

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {5} Baht</Title>
        <p>Food: Bath</p>
        <p>Transport: Bath</p>
        <p>Entertainment: Bath</p>
      <Stack my="sm">
        {/* Type additional text here. */}

        {/* <p>Food: Bath</p>
        <p>Transport: Bath</p>
        <p>Entertainment: Bath</p>
         */}
        </Stack>



      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>

    </Container>
  );
}
