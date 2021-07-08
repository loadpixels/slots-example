# Repro steps

1. Build the component library

`cd rwire`
`npm install`
`npm run build`

2. Generate the client

`cd ../client`
`npm install`

3. Observe slot working correctly in dev mode

`npm run dev`

4. Observe slot not working once built

`npm run build`
`npm run serve`

5. Additionally - observe that styles are missing
