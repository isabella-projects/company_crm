<?php

namespace App\Http\Requests\Employee;

use App\Models\Company;
use App\Models\Employee;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $company = Company::findOrFail($this->input('company_id'));

        return $company->user_id === Auth::id();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:employees,email',
            'phone' => 'required|string|max:20|regex:/^\+?\d{1,4}[-\s]?\d{1,9}$/',
            'company_id' => 'required|exists:companies,id'
        ];
    }
}
