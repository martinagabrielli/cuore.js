# **:heart: Cuore.js**

[View Demo](https://martinagabrielli.github.io/cuore.js/)

The idea to build this heart rate monitor came to me while on one of my daily runs in the park.
I created a function called CuoreFactory that is used to create a new object displayed in the HTML document. To create a new object, the CuoreFactory function is set to a variable. The function accepts a parameter of 'element' that stands for the HTML id tag (previously created.
The object will create an HTML element that has a class value of 'cuore stopped'. This contains another div element with a class name of 'bpm', together with another div with class name of 'shape'. The shape element is the heart shape container that has another div with a class name of 'fill' that represents the oxygen level.

The CuoreFactory object has three properties:

- BPM: sets the BPM value;
- Oxygen: sets the oxygen level;
- isBeating: determines if the heart is beating with a boolean; the BPM value comes from the user input on the slider: if the BPM value is 0 the heart animation is set to 'none', otherwise the heart beats according to the beat animation;
