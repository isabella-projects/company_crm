<?php

namespace App\Http\Controllers;

use App\Http\Requests\Company\StoreCompanyRequest;
use App\Http\Requests\Company\UpdateCompanyRequest;
use App\Models\Company;
use App\Services\CompanyService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    protected $companyService;

    public function __construct(CompanyService $companyService)
    {
        $this->companyService = $companyService;
    }

    public function index(): JsonResponse
    {
        $companies = Company::where('user_id', Auth::id())->paginate(5);

        return response()->json($companies, Response::HTTP_OK);
    }

    public function store(StoreCompanyRequest $request): JsonResponse
    {
        $validatedData = $request->validated();

        if ($request->hasFile('logo')) {
            $validatedData['logo'] = $request->file('logo')->store('logos', 'public');
        }
        $company = $this->companyService->createCompany($validatedData);

        return response()->json($company, Response::HTTP_CREATED);
    }

    public function show(Company $company): JsonResponse
    {
        if ($company->user_id !== Auth::id()) {
            abort(403, 'You are not authorized to view this company.');
        }

        if ($company->logo) {
            // I can use the full url on the frontend.. didn't have enough time to implement it on the front
            $company->logo_url = asset('storage/' . $company->logo);
        }

        return response()->json($company, Response::HTTP_OK);
    }

    public function update(UpdateCompanyRequest $request, Company $company): JsonResponse
    {
        $validatedData = $request->validated();
        $company = $this->companyService->updateCompany($company, $validatedData);

        return response()->json($company, Response::HTTP_OK);
    }

    public function destroy(Company $company): JsonResponse
    {
        if ($company->user_id !== Auth::id()) {
            abort(403, 'You are not authorized to delete this company.');
        }

        $this->companyService->deleteCompany($company);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
