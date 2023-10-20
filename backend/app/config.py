import os
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.
OPENAI_TOKEN = os.getenv('OPENAI_TOKEN')
