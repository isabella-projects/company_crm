<div align="center">
    <img src="https://i.imgur.com/YlGrpaq.png" width="800px" height="auto">
</div>

# 🌐 Company Management Mini CRM - React + Laravel RESTful API

# 📝 Description

## Company Management is Mini-CRM demo project part of technical challenge for an interview process as Laravel Developer.

## 👀 Sneak-peak

![image](https://github.com/user-attachments/assets/5e89e752-c6ba-4af0-bfa3-eef92cbe377d)

# 🛠 Tech Stack

<div>
    <img src="https://github.com/devicons/devicon/blob/master/icons/laravel/laravel-original.svg" title="Laravel" alt="Laravel" width="45" height="45"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg"  title="CSS3" alt="CSS3" width="45" height="45"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg" title="TailwindCSS" alt="TailwindCSS" width="45" height="45"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg"  title="TypeScript" alt="TypeScript" width="45" height="45"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/postman/postman-original.svg" title="Postman" alt="Postman" width="45" height="45"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" title="Git" alt="Git" width="45" height="45"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/vitejs/vitejs-original.svg" title="ViteJS" alt="ViteJS" width="45" height="45"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title="npm" alt="npm" width="45" height="45"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg" title="VSCode" alt="VSCode"       width="45" height="45"/>
</div>

## 📌 Cloning the project

```bash
$ git clone https://github.com/isabella-projects/company_crm.git
```

# Setup Instructions

1. Install Composer and Node Dependencies: In the project directory run:

```bash
  composer install
  npm install
```

2. Copy Environment File: Create a copy of the .env.example file and name it .env:

```bash
  cp .env.example .env
```

3. Generate Application Key: Run the following command to generate an application key:

```bash
  php artisan key:generate
```

4. Configure Database: Modify the .env file to configure your database connection:

```mysql
  DB_CONNECTION=mysql
```

-   Replace `your_database_name`, `your_database_username`, and `your_database_password` with your actual database credentials.

5. Run Migrations and Seed the MySQL database: Execute outstanding migrations with:

```bash
  php artisan migrate:fresh --seed
```

6. Start the Laravel Development Server:

```bash
  php artisan serve
```

7. Build assets or Run the development server for client-side JavaScript (optional):

```bash
  npm run dev | npm run build
```

### License

This project and the Laravel framework are licensed under the [MIT License](https://opensource.org/licenses/MIT).
