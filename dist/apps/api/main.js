/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const student_module_1 = __webpack_require__("./apps/api/src/app/domains/student/student.module.ts");
const reporting_module_1 = __webpack_require__("./apps/api/src/app/domains/reporting/reporting.module.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const config_1 = __webpack_require__("@nestjs/config");
const logger_1 = __webpack_require__("./apps/api/src/app/logger/index.ts");
const serve_static_1 = __webpack_require__("@nestjs/serve-static");
const path_1 = __webpack_require__("path");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            student_module_1.StudentModule,
            reporting_module_1.ReportingModule,
            logger_1.RihalLoggerModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                //
                // // locally database
                // type: 'postgres',
                // host: 'localhost', //configService.get<string>('DATABASE_HOST'),
                // port: 5432, //parseInt(configService.get<string>('DATABASE_PORT')),
                // username: 'postgres', //configService.get<string>('DATABASE_USER'),
                // password: 'root', //configService.get<string>('DATABASE_PASS'),
                // database: 'rihaldb', //configService.get<string>('DATABASE_NAME'),
                // entities: ['dist/**/*.entity{.ts,.js}'],
                // synchronize: true, // This for development
                // autoLoadEntities: true,
                //1 elephentSQL
                type: 'postgres',
                url: 'postgres://kfawlatn:dUMCryTxhvULGBSAYPA-3pazDHSbE30k@dumbo.db.elephantsql.com/kfawlatn',
                synchronize: true,
                // logging: true,
                autoLoadEntities: true,
                entities: ['dist/**/*.entity{.ts,.js}'],
                // //2 heroku
                // url: 'postgres://dyjinesbtbjwab:fad4f80e287db7a0781b527e964902970452bd4677ef33eaae64c773e67e2442@ec2-44-210-36-247.compute-1.amazonaws.com:5432/d2m7n1a4j8m4nn',
                // ssl: {
                //   rejectUnauthorized: false,
                // },
                // entities: ['dist/**/*.entity{.ts,.js}'],
                //3 local host
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'front'),
            }),
        ],
        controllers: [],
        providers: [logger_1.RihalLoggerService],
        // exports:[RihalLoggerModule]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/domains/reporting/reporting.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportingModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const logger_1 = __webpack_require__("./apps/api/src/app/logger/index.ts");
const classes_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/classes.entity.ts");
const countries_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/countries.entity.ts");
const student_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/student.entity.ts");
const reports_controller_1 = __webpack_require__("./apps/api/src/app/domains/reporting/reports.controller.ts");
const reports_service_1 = __webpack_require__("./apps/api/src/app/domains/reporting/reports.service.ts");
let ReportingModule = class ReportingModule {
};
ReportingModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [logger_1.RihalLoggerModule,
            typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student, classes_entity_1.Classes, countries_entity_1.Countries]),
        ],
        controllers: [reports_controller_1.ReportsController],
        providers: [reports_service_1.ReportsService, logger_1.RihalLoggerModule],
    })
], ReportingModule);
exports.ReportingModule = ReportingModule;


/***/ }),

/***/ "./apps/api/src/app/domains/reporting/reports.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const rihal_logger_service_1 = __webpack_require__("./apps/api/src/app/logger/rihal-logger.service.ts");
const reports_service_1 = __webpack_require__("./apps/api/src/app/domains/reporting/reports.service.ts");
let ReportsController = class ReportsController {
    constructor(reportsService, myLogger) {
        this.reportsService = reportsService;
        this.myLogger = myLogger;
        this.myLogger.setContext('ReportsController');
    }
    averageStudentsAge() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const summeryInfoService = yield this.reportsService.averageStudentsAge();
            return summeryInfoService;
            // const average = summeryInfoService.reduce(function (avg, value, _, { length }) {
            //   return avg + value.year / length ;
            // return {title:avg + value.year / length , count:length};
            //  }, 0);
            //this.myLogger.customLog();this.myLogger.warn('About to return cats!');
            //throw new HttpException('This is not acceptable', HttpStatus.NOT_ACCEPTABLE);
        });
    }
    fetchCountBy(relatedEntity, studentId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const summeryInfoService = yield this.reportsService.fetchCountBy(relatedEntity, studentId);
            return summeryInfoService;
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('ageAverage'),
    (0, swagger_1.ApiOperation)({ summary: 'for get count of students per year of birth' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ReportsController.prototype, "averageStudentsAge", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:relatedEntity'),
    (0, swagger_1.ApiOperation)({
        summary: 'for get count of students per each input entity(classes,countries)',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '' }),
    tslib_1.__param(0, (0, common_1.Param)('relatedEntity')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ReportsController.prototype, "fetchCountBy", null);
ReportsController = tslib_1.__decorate([
    (0, common_1.Controller)('reports'),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof reports_service_1.ReportsService !== "undefined" && reports_service_1.ReportsService) === "function" ? _c : Object, typeof (_d = typeof rihal_logger_service_1.RihalLoggerService !== "undefined" && rihal_logger_service_1.RihalLoggerService) === "function" ? _d : Object])
], ReportsController);
exports.ReportsController = ReportsController;


/***/ }),

/***/ "./apps/api/src/app/domains/reporting/reports.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const typeorm_2 = __webpack_require__("@nestjs/typeorm");
const student_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/student.entity.ts");
let ReportsService = class ReportsService {
    constructor(reportsService, datasource) {
        this.reportsService = reportsService;
        this.datasource = datasource;
    }
    fetchCountBy(relatedEntity, studentId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const relatedColumn = relatedEntity === 'classes' ? 'classes.class_name' : 'countries.name';
            const res = yield this.datasource
                .getRepository(student_entity_1.Student)
                .createQueryBuilder('student')
                .select(relatedColumn, 'name')
                //.addSelect('student.name')
                .innerJoin('student.' + relatedEntity, relatedEntity)
                .addSelect('count(student.id)', 'value')
                .groupBy(relatedColumn)
                //.addGroupBy('student.name')
                //.where('student.name = :name', { name: groupbyCol })
                .getRawMany();
            return res;
        });
    }
    averageStudentsAge() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.datasource
                .getRepository(student_entity_1.Student)
                .createQueryBuilder('student')
                .select('EXTRACT(YEAR FROM student.date_of_birth)', 'name')
                .addSelect('count(*)', 'value')
                .groupBy('EXTRACT(YEAR FROM student.date_of_birth)')
                .getRawMany();
            return res;
        });
    }
};
ReportsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(student_entity_1.Student)),
    tslib_1.__param(1, (0, typeorm_2.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _b : Object])
], ReportsService);
exports.ReportsService = ReportsService;


/***/ }),

/***/ "./apps/api/src/app/domains/student/classes.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassesController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const classes_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/classes.entity.ts");
//import { Message } from '@rihal/api-interfaces';
const classes_service_1 = __webpack_require__("./apps/api/src/app/domains/student/classes.service.ts");
let ClassesController = class ClassesController {
    constructor(classesService) {
        this.classesService = classesService;
    }
    get(filterDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (Object.keys(filterDTO).length)
                return yield this.classesService.getFiltered(filterDTO);
            else
                return yield this.classesService.findAll();
        });
    }
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const classes = yield this.classesService.findOne(id);
            if (!classes)
                throw new common_1.NotFoundException('Product does not exist!');
            return classes;
        });
    }
    add(classes) {
        return this.classesService.create(classes);
    }
    update(dto, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updatedResult = yield this.classesService.update(id, dto);
            if (updatedResult.affected === 0)
                throw new common_1.NotFoundException('classes not found');
            // const {name} = updatedResult
            return 204;
        });
    }
    remove(id) {
        this.classesService.remove(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassesController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassesController.prototype, "find", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof classes_entity_1.Classes !== "undefined" && classes_entity_1.Classes) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ClassesController.prototype, "add", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof classes_entity_1.Classes !== "undefined" && classes_entity_1.Classes) === "function" ? _b : Object, Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ClassesController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ClassesController.prototype, "remove", null);
ClassesController = tslib_1.__decorate([
    (0, common_1.Controller)('classes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof classes_service_1.ClassesService !== "undefined" && classes_service_1.ClassesService) === "function" ? _d : Object])
], ClassesController);
exports.ClassesController = ClassesController;


/***/ }),

/***/ "./apps/api/src/app/domains/student/classes.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassesService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
//import { Message } from '@rihal/api-interfaces';
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const classes_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/classes.entity.ts");
let ClassesService = class ClassesService {
    constructor(classesRepository) {
        this.classesRepository = classesRepository;
    }
    getFiltered(ceriteria) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let queryResult = yield this.findAll();
            if (ceriteria)
                queryResult = queryResult.filter(entity => entity.name === ceriteria);
            return queryResult;
        });
    }
    findAll() {
        return this.classesRepository.find();
    }
    findOne(id) {
        return this.classesRepository.findOneBy({ id: id });
    }
    create(country) {
        return this.classesRepository.save(country);
    }
    remove(id) {
        return this.classesRepository.delete(id);
    }
    update(id, classes) {
        return this.classesRepository.update(id, classes);
    }
};
ClassesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(classes_entity_1.Classes)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ClassesService);
exports.ClassesService = ClassesService;


/***/ }),

/***/ "./apps/api/src/app/domains/student/countries.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountriesController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const countries_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/countries.entity.ts");
//import { Message } from '@rihal/api-interfaces';
const countries_service_1 = __webpack_require__("./apps/api/src/app/domains/student/countries.service.ts");
let CountriesController = class CountriesController {
    constructor(countriesService) {
        this.countriesService = countriesService;
    }
    get(filterDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (Object.keys(filterDTO).length)
                return yield this.countriesService.getFiltered(filterDTO);
            else
                return yield this.countriesService.findAll();
        });
    }
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const countries = yield this.countriesService.findOne(id);
            if (!countries)
                throw new common_1.NotFoundException('Product does not exist!');
            return countries;
        });
    }
    add(countries) {
        return this.countriesService.create(countries);
    }
    update(dto, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updatedResult = yield this.countriesService.update(id, dto);
            if (updatedResult.affected === 0)
                throw new common_1.NotFoundException('countries not found');
            // const {name} = updatedResult
            return 204;
        });
    }
    remove(id) {
        this.countriesService.remove(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesController.prototype, "find", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof countries_entity_1.Countries !== "undefined" && countries_entity_1.Countries) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CountriesController.prototype, "add", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof countries_entity_1.Countries !== "undefined" && countries_entity_1.Countries) === "function" ? _b : Object, Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CountriesController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CountriesController.prototype, "remove", null);
CountriesController = tslib_1.__decorate([
    (0, common_1.Controller)('countries'),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof countries_service_1.CountriesService !== "undefined" && countries_service_1.CountriesService) === "function" ? _d : Object])
], CountriesController);
exports.CountriesController = CountriesController;


/***/ }),

/***/ "./apps/api/src/app/domains/student/countries.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountriesService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
//import { Message } from '@rihal/api-interfaces';
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const countries_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/countries.entity.ts");
let CountriesService = class CountriesService {
    constructor(countriesRepository) {
        this.countriesRepository = countriesRepository;
    }
    getFiltered(ceriteria) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let queryResult = yield this.findAll();
            if (ceriteria)
                queryResult = queryResult.filter(entity => entity.name === ceriteria);
            return queryResult;
        });
    }
    findAll() {
        return this.countriesRepository.find();
    }
    findOne(id) {
        return this.countriesRepository.findOneBy({ id: id });
    }
    create(country) {
        return this.countriesRepository.save(country);
    }
    remove(id) {
        return this.countriesRepository.delete(id);
    }
    update(id, countries) {
        return this.countriesRepository.update(id, countries);
    }
};
CountriesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(countries_entity_1.Countries)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CountriesService);
exports.CountriesService = CountriesService;


/***/ }),

/***/ "./apps/api/src/app/domains/student/entities/classes.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Classes = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const student_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/student.entity.ts");
let Classes = class Classes {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Classes.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Column)({ name: "class_name", length: 255 }),
    tslib_1.__metadata("design:type", String)
], Classes.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.classes, { cascade: true }),
    tslib_1.__metadata("design:type", Array)
], Classes.prototype, "students", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Classes.prototype, "CreatedDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Classes.prototype, "ModifiedDate", void 0);
Classes = tslib_1.__decorate([
    (0, typeorm_1.Entity)('classes')
], Classes);
exports.Classes = Classes;


/***/ }),

/***/ "./apps/api/src/app/domains/student/entities/countries.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Countries = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const student_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/student.entity.ts");
let Countries = class Countries {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    tslib_1.__metadata("design:type", Number)
], Countries.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: "name", length: 255 }),
    tslib_1.__metadata("design:type", String)
], Countries.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.countries),
    (0, typeorm_1.JoinColumn)({ name: "studentid" }),
    tslib_1.__metadata("design:type", Array)
], Countries.prototype, "students", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Countries.prototype, "CreatedDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Countries.prototype, "ModifiedDate", void 0);
Countries = tslib_1.__decorate([
    (0, typeorm_1.Entity)('countries')
], Countries);
exports.Countries = Countries;


/***/ }),

/***/ "./apps/api/src/app/domains/student/entities/student.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Student = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const classes_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/classes.entity.ts");
const countries_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/countries.entity.ts");
let Student = class Student {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    tslib_1.__metadata("design:type", Number)
], Student.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], Student.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: "date_of_birth" }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Student.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: "classesId" }),
    (0, typeorm_1.ManyToOne)(() => classes_entity_1.Classes, (classes) => classes.students, { onDelete: 'CASCADE'
        //,eager:true
    }),
    (0, typeorm_1.JoinColumn)({ name: "classesId", referencedColumnName: "id" }),
    tslib_1.__metadata("design:type", typeof (_b = typeof classes_entity_1.Classes !== "undefined" && classes_entity_1.Classes) === "function" ? _b : Object)
], Student.prototype, "classes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: "countriesId" }),
    (0, typeorm_1.ManyToOne)(() => countries_entity_1.Countries, (countries) => countries.students),
    (0, typeorm_1.JoinColumn)({ name: "countriesId", referencedColumnName: "id" }),
    tslib_1.__metadata("design:type", typeof (_c = typeof countries_entity_1.Countries !== "undefined" && countries_entity_1.Countries) === "function" ? _c : Object)
], Student.prototype, "countries", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Student.prototype, "CreatedDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    tslib_1.__metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Student.prototype, "ModifiedDate", void 0);
Student = tslib_1.__decorate([
    (0, typeorm_1.Entity)('student')
], Student);
exports.Student = Student;


/***/ }),

/***/ "./apps/api/src/app/domains/student/entities/studentClass.viewentity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentClass = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let StudentClass = class StudentClass {
};
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", Number)
], StudentClass.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", String)
], StudentClass.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], StudentClass.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", Number)
], StudentClass.prototype, "countriesId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", String)
], StudentClass.prototype, "countryName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", Number)
], StudentClass.prototype, "classesId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", String)
], StudentClass.prototype, "classesName", void 0);
StudentClass = tslib_1.__decorate([
    (0, typeorm_1.ViewEntity)({
        expression: `
 select "t2"."id" "id" ,"t2"."name", "t2"."date_of_birth" "dateOfBirth", "t2"."countriesId", "t3"."name" "countryName" ,"t2"."classesId","t4"."class_name" "classesName"
 from "student" "t2"
 inner join "countries" "t3" on "t2"."countriesId"="t3"."id"
 inner join "classes" "t4" on "t2"."classesId"="t4"."id";
 `
    })
], StudentClass);
exports.StudentClass = StudentClass;


/***/ }),

/***/ "./apps/api/src/app/domains/student/student.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const student_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/student.entity.ts");
//import { Message } from '@rihal/api-interfaces';
const student_service_1 = __webpack_require__("./apps/api/src/app/domains/student/student.service.ts");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    getStudents(
    //@Body() studentSearchDTO: StudentSearchDTO,
    sort, order, page, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // if (Object.keys(studentSearchDTO).length) {
            const filteredStudents = yield this.studentService.getFilteredStudent(sort, order, page, query
            // studentSearchDTO
            );
            return filteredStudents;
            // } else {
            //   const allStudents = await this.studentService.findAll();
            //   return allStudents;
            // }
        });
    }
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const student = yield this.studentService.findOne(id);
            if (!student)
                throw new common_1.NotFoundException('student does not exist!');
            return student;
        });
    }
    create(student) {
        return this.studentService.create(student);
    }
    update(studentDto, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const studentUpdated = yield this.studentService.update(id, studentDto);
            if (studentUpdated.affected === 0)
                throw new common_1.NotFoundException('student not found');
            //  const { name } = studentUpdated;
            return 204;
        });
    }
    remove(id) {
        this.studentService.remove(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('/search'),
    tslib_1.__param(0, (0, common_1.Query)('sort')),
    tslib_1.__param(1, (0, common_1.Query)('order')),
    tslib_1.__param(2, (0, common_1.Query)('page')),
    tslib_1.__param(3, (0, common_1.Query)('query')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number, String]),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], StudentController.prototype, "getStudents", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], StudentController.prototype, "find", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof student_entity_1.Student !== "undefined" && student_entity_1.Student) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StudentController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof student_entity_1.Student !== "undefined" && student_entity_1.Student) === "function" ? _d : Object, String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], StudentController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StudentController.prototype, "remove", null);
StudentController = tslib_1.__decorate([
    (0, common_1.Controller)('student'),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof student_service_1.StudentService !== "undefined" && student_service_1.StudentService) === "function" ? _f : Object])
], StudentController);
exports.StudentController = StudentController;
function put(arg0) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "./apps/api/src/app/domains/student/student.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const student_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/student.entity.ts");
const classes_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/classes.entity.ts");
const countries_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/countries.entity.ts");
const studentClass_viewentity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/studentClass.viewentity.ts");
const student_controller_1 = __webpack_require__("./apps/api/src/app/domains/student/student.controller.ts");
const student_service_1 = __webpack_require__("./apps/api/src/app/domains/student/student.service.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const countries_service_1 = __webpack_require__("./apps/api/src/app/domains/student/countries.service.ts");
const countries_controller_1 = __webpack_require__("./apps/api/src/app/domains/student/countries.controller.ts");
const classes_controller_1 = __webpack_require__("./apps/api/src/app/domains/student/classes.controller.ts");
const classes_service_1 = __webpack_require__("./apps/api/src/app/domains/student/classes.service.ts");
const seeding_service_1 = __webpack_require__("./apps/api/src/app/seeds/seeding.service.ts");
let StudentModule = class StudentModule {
    constructor(seedingService) {
        this.seedingService = seedingService;
    }
    onApplicationBootstrap() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //  await this.seedingDatabase();
        });
    }
    seedingDatabase() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.seedingService.dropTables();
            for (let i = 0; i < 10; i++)
                yield this.seedingService.seedBaseTables();
            for (let i = 0; i < 110; i++)
                yield this.seedingService.seedStudent();
            // now set randows classes & countries for student
            yield this.seedingService.seedStudentUpdate();
        });
    }
};
StudentModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student, classes_entity_1.Classes, countries_entity_1.Countries, studentClass_viewentity_1.StudentClass])],
        controllers: [
            student_controller_1.StudentController,
            countries_controller_1.CountriesController,
            classes_controller_1.ClassesController,
        ],
        providers: [
            student_service_1.StudentService,
            countries_service_1.CountriesService,
            classes_service_1.ClassesService,
            seeding_service_1.SeedingService,
        ],
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof seeding_service_1.SeedingService !== "undefined" && seeding_service_1.SeedingService) === "function" ? _a : Object])
], StudentModule);
exports.StudentModule = StudentModule;


/***/ }),

/***/ "./apps/api/src/app/domains/student/student.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
//import { Message } from '@rihal/api-interfaces';
const student_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/student.entity.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const studentClass_viewentity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/studentClass.viewentity.ts");
let StudentService = class StudentService {
    constructor(studentsRepository, studentClassRepository, datasource) {
        this.studentsRepository = studentsRepository;
        this.studentClassRepository = studentClassRepository;
        this.datasource = datasource;
    }
    getFilteredStudent(sort, order, page, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const take = 10;
            const [data, total] = yield (yield this.datasource.manager.findAndCount(studentClass_viewentity_1.StudentClass, {
                where: [{
                        name: (0, typeorm_2.ILike)(`%${query}%`),
                        //email: ILike(`%${search}%`)
                    }],
                order: {
                    [sort]: order
                },
                take,
                skip: (page - 1) * take
            }));
            return {
                studentClasses: data,
                count: total
            };
        });
    }
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // return this.studentsRepository.findOneBy({ id: id });
            const student = yield this.studentClassRepository.findOneBy({ id: id });
            // const categories = await student.classes
            return student;
        });
    }
    create(Student) {
        return this.studentsRepository.save(Student);
        // return this.studentsRepository.find();
    }
    update(id, studentDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updated = yield this.studentsRepository.update(id, studentDto);
            // const {name} = updated
            return updated;
        });
    }
    remove(id) {
        return this.studentsRepository.delete(id);
    }
};
StudentService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(studentClass_viewentity_1.StudentClass)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], StudentService);
exports.StudentService = StudentService;


/***/ }),

/***/ "./apps/api/src/app/logger/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/api/src/app/logger/rihalLogger.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/api/src/app/logger/rihal-logger.service.ts"), exports);


/***/ }),

/***/ "./apps/api/src/app/logger/rihal-logger.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RihalLoggerService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let RihalLoggerService = class RihalLoggerService extends common_1.ConsoleLogger {
    /**
     * Write a 'log' level log.
     */
    log(message, ...optionalParams) { }
    customLog() {
        this.log('Please feed the cat!');
    }
    /**
     * Write an 'error' level log.
     */
    error(message, stack, context) {
        // add your tailored logic here
        // super.error(...arguments);
    }
    /**
     * Write a 'warn' level log.
     */
    warn(message, ...optionalParams) { }
};
RihalLoggerService = tslib_1.__decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT })
], RihalLoggerService);
exports.RihalLoggerService = RihalLoggerService;


/***/ }),

/***/ "./apps/api/src/app/logger/rihalLogger.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RihalLoggerModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rihal_logger_service_1 = __webpack_require__("./apps/api/src/app/logger/rihal-logger.service.ts");
let RihalLoggerModule = class RihalLoggerModule {
};
RihalLoggerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [rihal_logger_service_1.RihalLoggerService],
        exports: [rihal_logger_service_1.RihalLoggerService],
    })
], RihalLoggerModule);
exports.RihalLoggerModule = RihalLoggerModule;


/***/ }),

/***/ "./apps/api/src/app/seeds/initialSeed.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitialStudentSeed = exports.InitialClassesSeed = exports.InitialCountrySeed = void 0;
const faker_1 = __webpack_require__("@faker-js/faker");
//import { User, Post } from "../../entities";
function InitialCountrySeed(entity) {
    return fakerCountry();
}
exports.InitialCountrySeed = InitialCountrySeed;
function InitialClassesSeed(entity) {
    return fakerClasses();
}
exports.InitialClassesSeed = InitialClassesSeed;
function InitialStudentSeed(entity) {
    return fakerStudent();
}
exports.InitialStudentSeed = InitialStudentSeed;
const fakerCountry = () => ({
    countryName: faker_1.faker.address.country(),
});
const fakerClasses = () => ({
    className: faker_1.faker.helpers.arrayElement(['arts', 'science', 'front end developing', 'full stack developer', "yuga", "spanish", "cooking", "meditation", "negotiation", "life tricks"])
});
const fakerStudent = () => ({
    name: faker_1.faker.name.firstName() + " " + faker_1.faker.name.lastName(),
    dateOfBirth: faker_1.faker.date.between('1970-01-01', '2019-01-05'),
    classesId: faker_1.faker.datatype.number({ 'min': 41, 'max': 50 }),
    //countriesId:faker.datatype.number({'min': 51,'max': 60}),
    classes: fakerClasses(),
    countries: fakerCountry(),
    //email: faker.internet.email(),
    //password: faker.internet.password(),
});


/***/ }),

/***/ "./apps/api/src/app/seeds/seeding.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeedingService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const classes_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/classes.entity.ts");
const countries_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/countries.entity.ts");
const student_entity_1 = __webpack_require__("./apps/api/src/app/domains/student/entities/student.entity.ts");
const initialSeed_1 = __webpack_require__("./apps/api/src/app/seeds/initialSeed.ts");
// import { RoleEntity } from 'src/entities/role.entity';
// import { roleSeeds } from 'src/seeds/role.seeds';
let SeedingService = class SeedingService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    dropTables() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.entityManager.query(`
          truncate TABLE student RESTART IDENTITY CASCADE;
          truncate TABLE  classes  RESTART IDENTITY CASCADE;
          truncate TABLE countries  RESTART IDENTITY CASCADE;
        `, null),
                //this.entityManager.query(`delete from classes;`,null)
            ]);
        });
    }
    seedBaseTables() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.entityManager.save(countries_entity_1.Countries, (0, initialSeed_1.InitialCountrySeed)('countries')),
                this.entityManager.save(classes_entity_1.Classes, (0, initialSeed_1.InitialClassesSeed)('classes')),
                //  this.entityManager.save(Student, InitialDatabaseSeed("student")),
            ]);
        });
    }
    seedStudent() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.entityManager.save(student_entity_1.Student, (0, initialSeed_1.InitialStudentSeed)('student')),
            ]);
        });
    }
    seedStudentUpdate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.entityManager.query(`
      update student set
      "classesId"=floor(random() * 9 + 1), "countriesId"=
      floor(random() * 9 + 1)
      WHERE id is not null;`, null),
            ]);
        });
    }
};
SeedingService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], SeedingService);
exports.SeedingService = SeedingService;


/***/ }),

/***/ "@faker-js/faker":
/***/ ((module) => {

module.exports = require("@faker-js/faker");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/serve-static":
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
const common_1 = __webpack_require__("@nestjs/common");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, {
            cors: true
        });
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        // Initialize global exception filter
        //  const logger = app.select(AppModule).get(AppLoggerService, {strict: true});
        // app.useGlobalFilters(new AllExceptionsFilter(httpRef, logger));
        const config = new swagger_1.DocumentBuilder()
            .setTitle('learnify app APIs')
            .setDescription('The rihals assessment API description')
            .setVersion('1.0')
            .addTag('Student/Reports')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        //custom logger
        //app.useLogger(new RihalLoggerService());
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map