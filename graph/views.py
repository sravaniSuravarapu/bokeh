# myapp/views.py
from django.shortcuts import render
from bokeh.plotting import figure
from bokeh.embed import server_document

def index(request):
    plot = figure(width=400, height=400, tools="pan,wheel_zoom,box_zoom,save,reset")
    x = [1, 2, 3, 4]
    y = [5, 6, 7, 8]
    plot.line(x, y)

    script = server_document("my_plot", plot)
    return render(request, "index.html", {"script": script})