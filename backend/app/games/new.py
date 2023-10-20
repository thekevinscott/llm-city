import random
from ..llm import openai, make_completion
from ..templates import get_template

make_completion([{ "role": "user", "content": "hello" }])

def get_personality():
    get_template('./templates/personality.txt')


def get_random_position(width: int, height: int):
    return [random.randrange(0, width), random.randrange(0, height)]

def make_new_player(width: int, height: int):
    position = get_random_position(width, height)
    
def start_new_game(width: int, height: int):
    players = [
        {
            "position": get_random_position(width, height),
        }
    ]

    return {
        "width": width,
        "height": height,
        "players": players,
    }
