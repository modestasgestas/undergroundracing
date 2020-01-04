import {
    ADD_TOKEN,
    ADD_USER,
    ADD_ABILITIES,
    ADD_CARS,
    ADD_CAR_INFO,
    ADD_CAR_SHOP,
    ADD_ENGINE_SHOP,
    ADD_TURBO_SHOP,
    ADD_BRAKES_SHOP,
    ADD_TIRES_SHOP,
    ADD_NITROUS_SHOP,
    CLEAR_CAR_INFO,
    CLEAR_USER_CARS,
    ADD_ACTIVE_CAR, ADD_TASK,
    ADMIN_LOGIN, GET_USER, ADD_PART, GET_ALL_PARTS, ADD_PARTS,
    RACE_ACTION, ADD_WHEELS
} from "./action_types";

const initialState = {
    token: "",
    adminToken: null,
    user_info: null,
    user_abilities: null,
    user_task: null,
    user_cars: null,
    user_car_info: [],
    user: null,
    part: null,
    allPars: null,
    engine: null,
    nos: null,
    wheels: null,
    vechile: null,
    added_part: null,
    active_car: null,
    car_shop: null,
    part_shop: {
        engines: null,
        turbos: null,
        tires: null,
        brakes: null,
        nitrous: null
    },
    race:null
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TOKEN:
            return {...state, token: action.payload.token};
        case ADD_USER:
            return {...state, user_info: action.payload};
        case ADD_ABILITIES:
            return {...state, user_abilities: action.payload};
        case ADD_TASK:
            return {...state, user_task: action.payload};
        case ADD_CARS:
            return {...state, user_cars: action.payload};
        case CLEAR_USER_CARS:
            return {...state, user_cars: []};
        case ADD_CAR_INFO:
            return {...state, user_car_info: state.user_car_info.concat(action.payload)};
        case CLEAR_CAR_INFO:
            return {...state, user_car_info: []};
        case ADD_ACTIVE_CAR:
            return {...state, active_car: action.payload};
        case ADD_CAR_SHOP:
            return {...state, car_shop: action.payload};
        case ADD_ENGINE_SHOP:
            return {
                ...state, part_shop: {
                    engines: action.payload,
                    turbos: state.part_shop.turbos,
                    brakes: state.part_shop.brakes,
                    tires: state.part_shop.tires,
                    nitrous: state.part_shop.nitrous
                }
            };
        case ADD_TURBO_SHOP:
            return {
                ...state, part_shop: {
                    engines: state.part_shop.engines,
                    turbos: action.payload,
                    brakes: state.part_shop.brakes,
                    tires: state.part_shop.tires,
                    nitrous: state.part_shop.nitrous
                }
            };
        case ADD_BRAKES_SHOP:
            return {
                ...state, part_shop: {
                    brakes: action.payload,
                    engines: state.part_shop.engines,
                    turbos: state.part_shop.turbos,
                    tires: state.part_shop.tires,
                    nitrous: state.part_shop.nitrous
                }
            };
        case ADD_TIRES_SHOP:
            return {
                ...state, part_shop: {
                    tires: action.payload,
                    engines: state.part_shop.engines,
                    turbos: state.part_shop.turbos,
                    brakes: state.part_shop.brakes,
                    nitrous: state.part_shop.nitrous
                }
            };
        case ADD_NITROUS_SHOP:
            return {
                ...state, part_shop: {
                    nitrous: action.payload,
                    engines: state.part_shop.engines,
                    turbos: state.part_shop.turbos,
                    brakes: state.part_shop.brakes,
                    tires: state.part_shop.tires
                }
            };
        case ADMIN_LOGIN:
            return {...state, adminToken: action.payload};
        case GET_USER:
            return {...state, user: action.payload};
        case ADD_PART:
            return {...state, part: action.payload};
        case GET_ALL_PARTS:
            return {...state, allParts: action.payload};
        case ADD_PARTS:
            return {...state, added_part: action.payload};
            return {...state, added_part: action.payload};
        case RACE_ACTION:
            return {...state, race: action.payload};
        default:
            return state;
    }
}


export default rootReducer;
