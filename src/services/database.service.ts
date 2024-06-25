import {
    Database,
    Collection,
    FileSystem,
    DatabaseConfiguration,
    LogDomain,
    LogLevel,
} from 'cbl-ionic';


export class DatabaseService {
    private database: Database;

    constructor() {}

    public async initDatabase() {
        //need to guarantee we can write to the file system
        try {

            //added code to get proper path to save database per platform
            const fileSystem = new FileSystem();
            const directoryPath = await fileSystem.getDefaultPath();

            const dc = new DatabaseConfiguration();
            dc.setDirectory(directoryPath);

            this.database = new Database('travelsample', dc);

            //turned on database logging too verbose to see information in IDE
            await this.database.setLogLevel(LogDomain.ALL, LogLevel.VERBOSE);
            await this.database.open();

        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    public async  getHotelCollection(): Promise<Collection>{
        return this.database.collection("hotel", "inventory");
    }

    public async  getLandmarkCollection(): Promise<Collection>{
        return this.database.collection("landmark", "inventory");
    }

    public async  getAirportCollection(): Promise<Collection>{
        return this.database.collection("airport", "inventory");
    }

    public async  getAirlineCollection(): Promise<Collection>{
        return this.database.collection("airline", "inventory");
    }

    public async  getRouteCollection(): Promise<Collection>{
        return this.database.collection("route", "inventory");
    }
}