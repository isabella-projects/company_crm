<?php

namespace App\Http\Controllers;

use App\Http\Requests\Task\StoreTaskRequest;
use App\Http\Requests\Task\UpdateTaskRequest;
use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Http\Response;

class TaskController extends Controller
{
    protected $taskService;

    public function __construct(TaskService $taskService)
    {
        $this->taskService = $taskService;
    }

    public function index()
    {
        return response()->json(Task::with('employee')->get(), Response::HTTP_OK);
    }

    public function store(StoreTaskRequest $request)
    {
        $validatedData = $request->validated();
        $task = $this->taskService->createTask($validatedData);

        return response()->json($task, Response::HTTP_CREATED);
    }

    public function show(Task $task)
    {
        return response()->json($task, Response::HTTP_OK);
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $validatedData = $request->validated();
        $task = $this->taskService->updateTask($task, $validatedData);

        return response()->json($task, Response::HTTP_OK);
    }

    public function destroy(Task $task)
    {
        $this->taskService->deleteTask($task);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
