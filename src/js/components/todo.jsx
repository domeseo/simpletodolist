import React, { useState } from "react";

// todo list
// el usuario inserta una tarea che se suma a una lista de tareas
// necesito un input value
// este input se añade a la lista

function TodoList() {
    // use state con una lista vacia para poder iniacilizar la tarea
    const [task, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");


    function addTask(e) {
        e.preventDefault();
        if (inputValue.trim() === "") {
            return;
        };
        setTasks([...task, inputValue.trim()]);
        setInputValue("");

    };

    function DeleteTask(indice) {
        setTasks(task.filter((_, i) => i !== indice));

    };

    return (
        <>
            {/* <div>
            <br /> 
        </div>
        <form onSubmit={(e)=> addTask(e)}>
            <input value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} />
        </form>
        <ul>
            {task.map(
                (valor, indice) => (
                <li onClick={() => DeleteTask(indice)} key={indice}>{valor}</li>
            ))}
        </ul> */}
            <section className="vh-100 main" style={{ backgroundColor: '#e2d5de' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h6 className="mb-3">Todo List </h6>
                                    <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={(e) => addTask(e)}>
                                        <div className="form-outline flex-fill">
                                            <input value={inputValue}
                                                onChange={(event) => setInputValue(event.target.value)}
                                                type="text" id="form3" placeholder="What do you need to do today?" className="form-control form-control-lg" />
                                        </div>
                                    </form>
                                    <ul className="list-group mb-0">
                                        {task.map((valor, indice) => (
                                            <li onClick={() => DeleteTask(indice)} key={indice}>{valor}
                                                <i class="fa-solid fa-circle-xmark ml-2"></i></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );



};

export default TodoList;
