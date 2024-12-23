import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { DialogClose } from '@radix-ui/react-dialog';
// import { useAppDispatch } from '@/redux/hook';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useAddTodoMutation } from '@/redux/api/todoApi';

const AddTodoModal = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  // const dispatch = useAppDispatch();

  const [addTodo, { data, isError, isLoading }] = useAddTodoMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).slice(2);

    const taskDetails = {
      title: task,
      isCompleted: false,
      description,
      priority,
    };

    addTodo(taskDetails);
    // dispatch(addTodo(taskDetails));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-md font-semibold'>Add todo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add a task that you want to finish with mentioning the priority.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='task' className='text-right'>
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id='task'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id='description'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Priority</Label>
              <div className='col-span-3'>
                <Select
                  value={priority}
                  onValueChange={(value) => setPriority(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select your priority' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Priorities</SelectLabel>
                      <SelectItem value='high'>High</SelectItem>
                      <SelectItem value='medium'>Medium</SelectItem>
                      <SelectItem value='low'>Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <DialogClose asChild>
              <Button type='submit'>Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
