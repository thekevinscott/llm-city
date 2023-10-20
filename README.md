# LLM City

This is an experiment in autonomous LLM agents.

## Local Development

### Frontend

First, install dependencies:

```
pnpm install
```

Then start the server:

```
pnpm dev
```

### Backend

Install dependencies:

```
python3 -m venv env
source ./env/bin/activate
python3 -m pip install -r requirements.txt
```

Then start the server:

```
python3 -m uvicorn app.main:api --host 0.0.0.0 --port 5190
```
