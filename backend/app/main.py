import uuid
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .state import state
from .games.new import start_new_game

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




class PlayArgs(BaseModel):
    width: int
    height: int



@app.post("/games")
async def start_game(args: PlayArgs):
    id = str(uuid.uuid4())
    state.set(id, start_new_game(args.width, args.height))

    return {
        "id": id,
    }


@app.get("/games/{id}")
async def get_game_state(id: str):
    game_state = state.get(id)
    if game_state is None:
        raise HTTPException(status_code=404, detail="Game not found")

    return game_state
