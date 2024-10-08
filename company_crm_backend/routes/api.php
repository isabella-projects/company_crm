<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [RegisteredUserController::class, 'store']);
Route::post('/login', [AuthenticatedSessionController::class, 'store']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthenticatedSessionController::class, 'index']);
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);
    Route::delete('/user', [AuthenticatedSessionController::class, 'removeAccount']);

    Route::apiResource('companies', CompanyController::class);
    Route::apiResource('employees', EmployeeController::class);
    Route::apiResource('tasks', TaskController::class);
});
