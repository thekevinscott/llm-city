from typing import Any
import openai
from .config import OPENAI_TOKEN
openai.api_key = OPENAI_TOKEN

def make_completion(messages, functions=None, model='gpt-4'):
    args = {
        'model': model,
        'messages': messages,
    }
    if functions:
        args['functions'] = functions
    return openai.ChatCompletion.create(**args)

class LLM:
    pass

llm = LLM()
