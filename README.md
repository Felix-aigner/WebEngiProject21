# WebEngiProject21
a group project assignment for Web Engineering at Fh Campus WS21

## Frontend

### installing dependencies

- run "npm install" in frontend root folder

### running the project

- run "ng serve --proxy-config proxy.conf.json"



## Backend

- backend is found in the /backend folder

### installing dependencies

- [Install SSMS](https://aka.ms/ssmsfullsetup)
- [Install Visual Studio](https://visualstudio.microsoft.com/de/downloads/)

### run db migrations

- be sure your SQL server is up and running
- Open Package Manager Cconsole and run db migrations:
    - dotnet ef database update --startup-project ".\src\Web\Web.csproj" --project ".\src\Persistence\Persistence.csproj"

### running the project

- open the solution in Visual Studio and hit F5