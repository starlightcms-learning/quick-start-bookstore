# Starlight Quick Start Example

This is an example application created for the official Starlight quick start guide. It's a simple website made with 
Next.js for a fictional book store which shows its books and their availability. If you want to learn how we created 
this  application, visit our [knowledge base](https://knowledge.starlight.sh/guia/desenvolvimento/início-rápido).

## Setting up

To get up and running with the project locally, clone this repository and install its dependencies:

```shell
git clone https://github.com/starlightcms-learning/quick-start-bookstore.git
cd quick-start-bookstore
npm install
```

Then, rename the `.env.example` file to just `.env` and replace the `NEXT_APP_STARLIGHT_WORKSPACE_ID` variable value
with the ID of the workspace you created by following [this guide page about content management](https://knowledge.starlight.sh/guia/desenvolvimento/início-rápido/configurando-o-conteúdo). 
The file's content should look like this:

```dotenv
NEXT_APP_STARLIGHT_WORKSPACE_ID=1234567890
```

Finally, start the development server:

```shell
npm run dev
```

The application will be accessible over http://localhost:3000. 
