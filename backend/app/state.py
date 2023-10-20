import json

class State:
    _state = {}

    def __init__(self) -> None:
        try:
            with open('./state.json', 'r') as f:
                self._state = json.load(f)
        except:
            self._state = {}

    def set(self, id: str, next_state: dict):
        self._state[id] = next_state
        with open('./state.json', 'w') as f:
            f.write(json.dumps(self._state))

    def get(self, id: str):
        return self._state[id]

state = State()
