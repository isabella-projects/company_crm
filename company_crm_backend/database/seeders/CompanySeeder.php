<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Employee;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds. We can also separate concerns in factories (don't have enough time)
     */
    public function run(): void
    {
        $faker = Faker::create();
        $fakeUser = User::where('email', 'admin@admin.com')->first();


        for ($i = 1; $i <= 10; $i++) {
            $company = Company::create([
                'name' => $faker->company,
                'email' => $faker->companyEmail,
                'website' => $faker->url,
                'logo' => 'logos/default.png',
                'user_id' => $fakeUser->id,
            ]);


            for ($j = 1; $j <= 3; $j++) {
                $employee = Employee::create([
                    'first_name' => $faker->firstName,
                    'last_name' => $faker->lastName,
                    'email' => $faker->safeEmail,
                    'phone' => $faker->phoneNumber,
                    'company_id' => $company->id,
                ]);

                for ($k = 1; $k <= 2; $k++) {
                    Task::create([
                        'name' => $faker->sentence(3),
                        'description' => $faker->paragraph,
                        'employee_id' => $employee->id,
                    ]);
                }
            }
        }
    }
}
