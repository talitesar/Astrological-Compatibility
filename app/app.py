# import dependencies
from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine
import sqlite3
import pandas as pd
from flask_sqlalchemy import SQLAlchemy
import requests

#create engine
engine = create_engine("sqlite:///Resources/Astrological_data.sqlite?check_same_thread=False") 

# create connection
conn = engine.raw_connection()
cursor = conn.cursor()

#create an app
app = Flask(__name__) 

# create home route
@app.route("/")
def home():
     return render_template('index.html')

#create data route with SQL data

@app.route("/data")
def data():
     cursor.execute('SELECT * FROM Astrological_Compatibility')
     data = (cursor.fetchall())
     data = pd.DataFrame(data, columns = ["Zodiac_combination", "Compatibility_rate"])
     data = data.to_json(orient = "records")
     return data

if __name__ == "__main__":
     app.run(port =5000, debug=True)
