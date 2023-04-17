# import dependencies
from flask import Flask, render_template, jsonify, request
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

# create data route with SQL data
@app.route("/data")
def data():
    zodiac1 = request.args.get('zodiac1', '')
    zodiac2 = request.args.get('zodiac2', '')
    cursor.execute("SELECT * FROM Astrological_Compatibility WHERE zodiac1=? AND zodiac2=?", (zodiac1, zodiac2))
    data = cursor.fetchone()
    if data is not None:
        bad_match = data[3]
        compatibility_rate = data[4]
        if bad_match:
            outcome = "Sorry, your compatibility is not good."
        else:
            outcome = "Congratulations! Your compatibility is good."
    else:
        outcome = "Invalid Zodiac signs selected. Please try again."
        compatibility_rate = ""
    return jsonify(outcome=outcome, compatibility_rate=compatibility_rate)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
