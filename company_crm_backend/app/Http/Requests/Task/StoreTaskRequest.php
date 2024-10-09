<?php

namespace App\Http\Requests\Task;

use App\Models\Employee;
use App\Models\Task;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $employee = Employee::findOrFail($this->input('employee_id'));

        return $employee->company->user_id === Auth::id();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|in:new,started,done',
            'employee_id' => 'required|exists:employees,id'
        ];
    }
}
