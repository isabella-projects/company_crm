<?php

namespace App\Http\Controllers;

use App\Http\Requests\Employee\StoreEmployeeRequest;
use App\Http\Requests\Employee\UpdateEmployeeRequest;
use App\Models\Employee;
use App\Services\EmployeeService;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class EmployeeController extends Controller
{
    protected $employeeService;

    public function __construct(EmployeeService $employeeService)
    {
        $this->employeeService = $employeeService;
    }

    public function index()
    {
        return response()->json(Employee::with('company')->get(), Response::HTTP_OK);
    }

    public function store(StoreEmployeeRequest $request)
    {
        $validatedData = $request->validated();
        $employee = $this->employeeService->createEmployee($validatedData);

        return response()->json($employee, Response::HTTP_CREATED);
    }

    public function show(Employee $employee)
    {
        return response()->json($employee, Response::HTTP_OK);
    }

    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        $validatedData = $request->validated();
        $employee = $this->employeeService->updateEmployee($employee, $validatedData);

        return response()->json($employee, Response::HTTP_OK);
    }

    public function destroy(Employee $employee)
    {
        $this->employeeService->deleteEmployee($employee);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
