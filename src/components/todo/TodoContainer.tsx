// import { useAppSelector } from '@/redux/hook';
import { useGetTodosQuery } from '@/redux/api/todoApi';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { JSX } from 'react/jsx-runtime';

const TodoContainer = () => {
  // Coming from local state
  // const { todos } = useAppSelector((state) => state.todos);
  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);

  if (isError) {
    return <h1>Something went wrong..!!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className='flex justify-between mb-5'>
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className='bg-primary-gradient w-full h-full rounded-xl p-[5px]'>
        {/* <div className='bg-white text-2xl font-semibold p-5 flex justify-center items-center rounded-md'>
          <p>There is no task pending</p>
        </div> */}
        <div className='bg-white p-5 w-full h-full rounded-lg space-y-3'>
          {todos.data?.map(
            (
              item: JSX.IntrinsicAttributes & {
                _id: string;
                title: string;
                description: string;
                isCompleted?: boolean;
                priority: string;
              }
            ) => (
              <TodoCard {...item} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
