import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
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
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
