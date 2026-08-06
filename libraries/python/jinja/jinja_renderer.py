# libraries/python/jinja/jinja_renderer.py
# A script to demonstrate rendering Jinja2 templates programmatically.

import os
from datetime import datetime
from jinja2 import Environment, FileSystemLoader

def render_report():
    # Setup environment
    dir_path = os.path.dirname(os.path.realpath(__file__))
    env = Environment(loader=FileSystemLoader(dir_path))
    template = env.get_template('template.html.j2')
    
    # Mock data
    data = {
        'page_title': 'Polyglot System Status',
        'generated_time': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'modules': [
            {'name': 'Core Backend', 'language': 'Python', 'status': 'Active'},
            {'name': 'Web Frontend', 'language': 'TypeScript', 'status': 'Active'},
            {'name': 'High-Speed Solver', 'language': 'Rust', 'status': 'Idle'}
        ]
    }
    
    # Render and output
    rendered_content = template.render(data)
    print("--- Rendered Jinja2 Output ---")
    print(rendered_content)
    return rendered_content

if __name__ == "__main__":
    render_report()
