import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";
// import type NoTasksFound from "./NoTasksFound";


const TaskBoard = () => {
    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': 'Learn React',
        'description': 'Learn React and build a task management app',
        'tags': ['react', 'javascript', 'frontend'],
        'priority': 'high',
        'isFavorite': true,

    }
    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [tastToUpdate, setTaskToUpdate] = useState(null);

    function handleAddTask(newTask, isAdd) {
        if (isAdd) {
            setTasks([...tasks, newTask]);
        }
        else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            )
        }
        setShowAddModal(false);
    }

    function handleEditTask(task) {
        setTaskToUpdate(task);
        setShowAddModal(true);
    }

    function handleCloseClick() {
        setShowAddModal(false);
        setTaskToUpdate(null);
    }
    function handleDeleteTask(taskId) {
        const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
        setTasks(tasksAfterDelete);
    }
    function handleDeleteAllClick() {
        tasks.length = 0;
        setTasks([...tasks]);
    }
    function handleFavorite(taskId) {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, isFavorite: !task.isFavorite }
                    : task
            )
        );
    }
    function handleSearch(searchTerm) {
        const filtered = tasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTasks([...filtered]);
    }


    return (
        <section className="mb-20" id="tasks">
            {
                showAddModal && <AddTaskModal
                    onSave={handleAddTask}
                    onCloseClick={handleCloseClick}
                    tastToUpdate={tastToUpdate}
                ></AddTaskModal>}

            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="p-2 flex justify-end">
                    <SearchTask onSearch={handleSearch}></SearchTask>
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions onAddClick={() => setShowAddModal(true)}
                        onDeleteAllClick={handleDeleteAllClick}
                    ></TaskActions>
                    {
                        tasks.length === 0 ? <NoTasksFound></NoTasksFound> :
                        <TaskList
                            tasks={tasks}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            onFav={handleFavorite}
                        ></TaskList>
                    }
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;