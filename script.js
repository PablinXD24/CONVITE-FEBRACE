* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #1a1a1a;
    color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    flex-direction: column;
    overflow: hidden;
}

#neuron-title {
    font-size: 3rem;
    color: transparent;
    position: relative;
    letter-spacing: 1px;
    margin-bottom: 30px;
    display: inline-block;
}

#neuron-title span {
    display: inline-block;
    animation: glow-animation 2s ease-in-out infinite, flicker-animation 0.3s infinite alternate;
}

@keyframes glow-animation {
    0% {
        text-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px white, 0 0 20px #4A90E2, 0 0 30px #4A90E2, 0 0 40px #4A90E2, 0 0 50px #4A90E2;
    }
    50% {
        text-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px white, 0 0 25px #4A90E2, 0 0 35px #4A90E2, 0 0 45px #4A90E2, 0 0 55px #4A90E2;
    }
    100% {
        text-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px white, 0 0 20px #4A90E2, 0 0 30px #4A90E2, 0 0 40px #4A90E2, 0 0 50px #4A90E2;
    }
}

@keyframes flicker-animation {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

#invitation-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

#invitation-circle:hover {
    transform: scale(1.1);
}

#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

#group-invitation {
    display: none;
    padding: 20px;
    background-color: #333;
    color: #e1e1e1;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
    z-index: 1001;
    position: relative;
    animation: fade-in 0.5s ease-out;
    max-height: 60vh; /* Define uma altura máxima para o convite */
    overflow-y: auto; /* Habilita a rolagem vertical */
}

#group-invitation h2 {
    color: #4A90E2;
    font-size: 2rem;
    margin-bottom: 20px;
}

#group-invitation p,
#group-invitation ul li {
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 1.6;
    color: #b3b3b3;
}

#group-invitation ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 20px;
}

#group-invitation button {
    background-color: #4A90E2;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#group-invitation button:hover {
    background-color: #357ab7;
}


.hidden {
    display: none;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@media (max-width: 768px) {
    #neuron-title {
        font-size: 2rem;
    }

    #invitation-circle {
        width: 80px;
        height: 80px;
    }

    #group-invitation {
        width: 90%;
    }
}
