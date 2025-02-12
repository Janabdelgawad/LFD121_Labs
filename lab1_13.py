from flask import render_template
@app.route('/hello/')
@app.route('/hello/')
def hello(name=None):
    return render_template('hello.html', person=name)



from jinja2 import Environment, PackageLoader, select_autoescape
env = Environment(
    loader=PackageLoader("yourapp"),
autoescape = select_autoescape()

)

result = Markup('Original name=') + name


