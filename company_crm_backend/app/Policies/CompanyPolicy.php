<?php

namespace App\Policies;

use App\Models\Company;
use App\Models\User;

class CompanyPolicy
{
    public function create(User $user): bool
    {
        return $user->company === null;
    }

    public function update(User $user, Company $company)
    {
        return $user->id === $company->user_id;
    }

    public function delete(User $user, Company $company)
    {
        return $user->id === $company->user_id;
    }
}
