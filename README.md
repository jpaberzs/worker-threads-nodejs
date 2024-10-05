### Tutorial

---

- `node bacis/index.js` - It will run with one `worker` at a time. And take 14.998s of real time
- `node optimized/index.js` - It takes 4 CPU cores and divides work by 4. And take 0m3.998s of real time

`time curl --get http://localhost:3000/blocking` - To check time for blocking requests
