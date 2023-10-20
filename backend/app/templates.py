from string import Template
def get_template(path: str, **kwargs):
    with open(path, 'r') as f:
        content = f.read()
    t = Template(content) 
    return t.substitute(**kwargs)
