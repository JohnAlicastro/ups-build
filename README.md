1 - RUN THE FOLLOWING TWO COMMANDS IN ROOT DIRECTORY TO SPIN UP THE APP

```
npx expo start
```

(This is to spin up the Expo server)

```
npm run dev:tailwind
```

(This is to spin up the tailwind-rn compiler)

---

2 - cd INTO stepzen AND RUN THE FOLLOWING COMMAND TO SPIN UP STEPZEN ENDPOINT DEPLOYER AND USE https://dashboard.stepzen.com/explorer

```
stepzen start
```

OR THE FOLLOWING COMMAND TO SPIN STEPZEN UP AND USE http://localhost:5001/api/dealing-monkey WHILE DEVELOPING

```
stepzen start --dashboard=local
```
