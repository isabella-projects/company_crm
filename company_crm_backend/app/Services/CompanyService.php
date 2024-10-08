<?php

namespace App\Services;

use App\Models\Company;
use Illuminate\Support\Facades\Auth;

class CompanyService
{
    public function createCompany(array $data)
    {
        $data['user_id'] = Auth::id();
        return Company::create($data);
    }

    public function updateCompany(Company $company, array $data)
    {
        $company->update($data);
        return $company;
    }

    public function deleteCompany(Company $company)
    {
        $company->delete();
        return true;
    }
}
