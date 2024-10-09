<?php

namespace App\Http\Controllers;

use App\Http\Requests\Task\StoreTaskRequest;
use App\Http\Requests\Task\UpdateTaskRequest;
use App\Models\Employee;
use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    protected $taskService;

    public function __construct(TaskService $taskService)
    {
        $this->taskService = $taskService;
    }

    public function index()
    {
        $tasks = Task::whereHas('employee.company', function ($query) {
            $query->where('user_id', Auth::id());
        })->paginate(5);

        return response()->json($tasks, Response::HTTP_OK);
    }

    public function store(StoreTaskRequest $request)
    {
        $validatedData = $request->validated();
        $task = $this->taskService->createTask($validatedData);

        return response()->json($task, Response::HTTP_CREATED);
    }

    public function show(Task $task)
    {
        if ($task->employee->company->user_id !== Auth::id()) {
            abort(403, 'You are not authorized to view this task.');
        }

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
        if ($task->employee->company->user_id !== Auth::id()) {
            abort(403, 'You are not authorized to delete this task.');
        }

        $this->taskService->deleteTask($task);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
