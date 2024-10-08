<?php

namespace App\Http\Controllers;

use App\Http\Requests\Company\StoreCompanyRequest;
use App\Http\Requests\Company\UpdateCompanyRequest;
use App\Models\Company;
use App\Services\CompanyService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class CompanyController extends Controller
{
    protected $companyService;

    public function __construct(CompanyService $companyService)
    {
        $this->companyService = $companyService;
    }

    public function index(): JsonResponse
    {
        return response()->json(Company::all(), Response::HTTP_OK);
    }

    public function store(StoreCompanyRequest $request): JsonResponse
    {
        $validatedData = $request->validated();
        $company = $this->companyService->createCompany($validatedData);

        return response()->json($company, Response::HTTP_CREATED);
    }

    public function show(Company $company): JsonResponse
    {
        return response()->json($company, Response::HTTP_OK);
    }

    public function update(UpdateCompanyRequest $request, Company $company): JsonResponse
    {
        Gate::authorize('update', $company);

        $validatedData = $request->validated();
        $company = $this->companyService->updateCompany($company, $validatedData);

        return response()->json($company, Response::HTTP_OK);
    }

    public function destroy(Company $company): JsonResponse
    {
        Gate::authorize('delete', $company);

        $this->companyService->deleteCompany($company);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
