import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import debug from 'debug'
import * as express from 'express'
import { saveTransactionRoute } from './routes/saveTransaction';

import { HOSTNAME, PORT } from './utils/constants';

const app = express();
const port = 8989;

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
const log = debug('Server')

export class ServerSetup {

    private application: express.Application;

    constructor() {
        this.application = express();

        this.application.use(this.supportCors);
        this.application.use(bodyParser.json());
        this.application.use(cookieParser());
        this.registerRoutes();

    }

    private supportCors(req: express.Requst,res: express.Response, next: express.NextFunction) {
        res.setHeader('Access-Control-Allow-Origin', '*')

        if (req.method === 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Methods', '*')
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

            res.sendStatus(200)
            return
        }
        next()
    }

    private registerRoutes() {



        app.get("/", (req, res) => {
            res.send("Hello World");
        }) 

        app.use(saveTransactionRoute);

        app.get('/routes', (req, res) => {
            res.send(app._router.stack
                .filter(r => r.route) 
                .map(r => r.route.path))
        })
    }

    public start() {
        this.application.listen(PORT, HOSTNAME, () => {
            log(`Listening on port ${PORT}`)
        })
    }
}