# 🐉 Dragon Ball Z: DOM Breaker

![Game Banner](https://media1.tenor.com/m/fXjXyN_-CukAAAAC/dragon-ball-z-dbz.gif)

> *"With the passing of time and evolution of technology, the human brain has been requesting more and more stimuli... Boredom happens whenever people don't receive enough of these stimuli."*

You are not receiving enough stimuli. **Planet Namek is in danger.** Frieza is approaching. And the only way to save the universe (and cure your boredom) is to code your own game engine in **Vanilla JavaScript**.

**Target: 60 FPS. No Frame Drops. No Canvas. Just pure DOM power.**

---

## 🚀 About The Project

This is a **Brick Breaker (Arkanoid)** style game set in the Dragon Ball Z universe. It was built as a performance challenge to master the **DOM**, **Event Loops**, and **Browser Rendering** optimization.

Unlike modern web games that use `<canvas>` or WebGL, **this game uses standard HTML DIVs** for everything (Player, Ball, Bricks). The challenge was to achieve a buttery smooth **60 FPS** without "Jank" or stuttering, using only the CPU and the DOM tree.

### 🌟 Key Features
* **🏎️ 60 FPS or Nothing:** Optimized using `requestAnimationFrame` for smooth rendering.
* **🧱 Pure DOM Manipulation:** No canvas, no frameworks. Just raw JavaScript.
* **🔥 DBZ Themed Levels:**
    1.  **Arrival:** Defeat Frieza's Soldiers.
    2.  **Ginyu Force:** Break the Metal Bricks (Armor).
    3.  **Final Form:** Survive the battle against Frieza.
* **⏸️ Game State Management:** Pause, Restart, and Continue at any time.
* **📊 Live HUD:** Real-time tracking of **Score**, **Lives**, and **Time**.

---

## 🎮 Gameplay Preview

| **The Mission** | **The Enemy** |
|:---:|:---:|
| ![Gameplay](https://media.tenor.com/bL_lM0G6QJAAAAAi/goku-shenron.gif) | ![Frieza](https://media.tenor.com/yN_4EnZqaY8AAAAi/frieza-this-isnt-even-my-final-form.gif) |
| *Control Goku's Paddle* | *Destroy Frieza's Defenses* |

*(Note: Add your own gameplay screenshots here in the `assets/screenshots` folder)*

---

## 🛠️ Technical Specs (The Challenge)

This project strictly adheres to the following constraints:

-   [x] **No Canvas / No WebGL:** All rendering is done via CSS manipulation (`transform`, `top`, `left`).
-   [x] **Performance First:** Heavy use of Chrome DevTools (Performance Tab) to ensure scripts execute under **16.6ms** per frame.
-   [x] **Input Handling:** Smooth keyboard controls (no key spamming required).
-   [x] **Memory Management:** Minimal object creation during the game loop to avoid Garbage Collection pauses.

### Code Snippet: The Game Loop
```javascript
function gameLoop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = timestamp - lastTime;
    
    if (!isPaused) {
        update(deltaTime); // Physics & Logic
        draw();            // DOM Updates
    }
    
    lastTime = timestamp;
    window.requestAnimationFrame(gameLoop);
}

🕹️ Controls
Key,Action
⬅️ Left Arrow,Move Goku Left
➡️ Right Arrow,Move Goku Right
SPACE,Launch Spirit Bomb (Ball)
P,Pause / Resume Game
R,Restart Mission

📦 How to Run
git clone https://github.com/obenmbar/make-your-game.git
