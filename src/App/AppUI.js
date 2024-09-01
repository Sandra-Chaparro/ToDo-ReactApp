import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { Footer } from "../Footer";
import { Logo } from "../SWITLogo";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import React from "react";
import { NewToDoForm } from "../NewToDoForm";
import { EditForm } from "../EditToDoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    editTodo,
    deleteTodo,
    openAddModal,
    setOpenAddModal,
    openEditModal,
    setOpenEditModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <Logo />
      <div style={{ backgroundColor: "#08313A", borderRadius: "2%" }}>
        <TodoCounter />
        <TodoSearch />
        <CreateTodoButton setOpenAddModal={setOpenAddModal} />
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              onEdit={() => editTodo(todo.text)}
              setOpenAddModal={setOpenAddModal}
              setOpenEditModal={setOpenEditModal}
            />
          ))}
        </TodoList>
      </div>
      <Footer />
      {(openAddModal || openEditModal) && (
        <Modal>
          {openAddModal && <NewToDoForm></NewToDoForm>}
          {openEditModal && <EditForm></EditForm>}
        </Modal>
      )}
    </>
  );
}

export { AppUI };
