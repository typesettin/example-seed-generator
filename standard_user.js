function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randNum() {
    return Math.floor((Math.random() * 100) + 1);
};

let users = [{
        _id: { '$oid': '59456d2dfc13ae3b14000118' },
        email: 'asmithson0@kickstarter.com',
        gender: 'M',
        description: 'Reduced discrete benchmark',
        username: 'asmithson0',
        activated: false,
        userid: 1,
        password: 'Avslt4pA1J',
        accesstoken: 'f1589c80a7ed80582f28d128c5ab30718337bb30a21326b7088edda11b6ac69b',
        location: {
            city: 'North Las Vegas',
            country: 'United States',
            state: 'Nevada',
            zip: '89087',
            loc: { longitude: '-115.1458', latitude: '36.2204' }
        },
        url: 'www.asmithson.com',
        firstname: 'Arne',
        lastname: 'Smithson',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '1FLSFYDDhzmeDcyjtL9T4dQxBfi4tuj2iL',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000119' },
        email: 'tfader1@ftc.gov',
        gender: 'M',
        description: 'Universal encompassing Graphic Interface',
        username: 'tfader1',
        activated: true,
        userid: 2,
        password: 'BLiZBiwkYwg',
        accesstoken: '00f4185c3937bb89198581f8659523a56d2ab3cd76d154be7984aeef9e23aef0',
        location: {
            city: 'Washington',
            country: 'United States',
            state: 'District of Columbia',
            zip: '20016',
            loc: { longitude: '-77.086', latitude: '38.9381' }
        },
        url: 'www.tfader.com',
        firstname: 'Tulley',
        lastname: 'Fader',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '1GnjvzDHmgDUCcG1JFuvPyLKAZBM7P3Q8A',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400011a' },
        email: 'dstenyng2@edublogs.org',
        gender: 'F',
        description: 'Robust maximized application',
        username: 'dstenyng2',
        activated: false,
        userid: 3,
        password: 'McnbSHqilo',
        accesstoken: 'fca9357f7877475edd58c862b2b14c7df27b84de76b21d2ff8c42ecacc9068bc',
        location: {
            city: 'Erie',
            country: 'United States',
            state: 'Pennsylvania',
            zip: '16505',
            loc: { longitude: '-80.1534', latitude: '42.1109' }
        },
        url: 'www.dstenyng.com',
        firstname: 'Desdemona',
        lastname: 'Stenyng',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '19unZnNYVEJ5yCBXwwCCiFfUqroxuRPo9y',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400011b' },
        email: 'kvanderkruijs3@weebly.com',
        gender: 'M',
        description: 'Intuitive executive software',
        username: 'kvanderkruijs3',
        activated: false,
        userid: 4,
        password: '0Lo6X3Qwwv',
        accesstoken: '2a782af65ae5cdcd10fb3ed112089ece288ed114f8438a7c23e3426bfde29a9b',
        location: {
            city: 'Newton',
            country: 'United States',
            state: 'Massachusetts',
            zip: '02458',
            loc: { longitude: '-71.1875', latitude: '42.3528' }
        },
        url: 'www.kvan der kruijs.com',
        firstname: 'Kip',
        lastname: 'Van der Kruijs',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '1KHWPx1UsCSwNuPGhd1Ee6uBVb7Uv66p4h',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400011c' },
        email: 'dprendeville4@cam.ac.uk',
        gender: 'M',
        description: 'Visionary fresh-thinking hierarchy',
        username: 'dprendeville4',
        activated: true,
        userid: 5,
        password: 'ftBSMwm',
        accesstoken: 'c31f8792e97e43078c4d7886afbbb9ced84685ec370ae827828003c63cf3a008',
        location: {
            city: 'Ann Arbor',
            country: 'United States',
            state: 'Michigan',
            zip: '48107',
            loc: { longitude: '-83.8366', latitude: '42.2535' }
        },
        url: 'www.dprendeville.com',
        firstname: 'Davis',
        lastname: 'Prendeville',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '17UvPCkdqMExMt3tpsiFRgGji8dQDftQsG',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400011d' },
        email: 'eketcher5@cpanel.net',
        gender: 'F',
        description: 'Fully-configurable zero tolerance software',
        username: 'eketcher5',
        activated: false,
        userid: 6,
        password: 'Gghk57r',
        accesstoken: 'c397345a2b13a713ee88297845b58af8d6364497a1b52f0cd05be58de06c22f8',
        location: {
            city: 'Roanoke',
            country: 'United States',
            state: 'Virginia',
            zip: '24024',
            loc: { longitude: '-79.9579', latitude: '37.2742' }
        },
        url: 'www.eketcher.com',
        firstname: 'Ediva',
        lastname: 'Ketcher',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '1Hr6Fc98dxZEgipsVU6U1jCwjQthY4Dncm',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400011e' },
        email: 'rphlippsen6@delicious.com',
        gender: 'M',
        description: 'Vision-oriented coherent internet solution',
        username: 'rphlippsen6',
        activated: true,
        userid: 7,
        password: '7Qk6oG',
        accesstoken: '5716c2350f89c09f9c90bd15f952ade3bb8ba48abf1b1adeddeb89471d4aebee',
        location: {
            city: 'Brooklyn',
            country: 'United States',
            state: 'New York',
            zip: '11231',
            loc: { longitude: '-74.0014', latitude: '40.6794' }
        },
        url: 'www.rphlippsen.com',
        firstname: 'Ring',
        lastname: 'Phlippsen',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '1M1viTCSDSG8CTFPz9Zy9FvgNyWQPXFHuY',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400011f' },
        email: 'aroft7@reddit.com',
        gender: 'F',
        description: 'User-centric context-sensitive pricing structure',
        username: 'aroft7',
        activated: true,
        userid: 8,
        password: '3uxfAsC0VZ9',
        accesstoken: '145ab0acef9c7e8091ea6b0118713280c2722bf6a8538d09cd7982e31248f935',
        location: {
            city: 'Santa Monica',
            country: 'United States',
            state: 'California',
            zip: '90410',
            loc: { longitude: '-118.2987', latitude: '33.7866' }
        },
        url: 'www.aroft.com',
        firstname: 'Alis',
        lastname: 'Roft',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '12JYjJFCaTKqckAZGwcQRtU2byLvg6BUmw',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000120' },
        email: 'tmckeefry8@nifty.com',
        gender: 'F',
        description: 'Profit-focused bottom-line database',
        username: 'tmckeefry8',
        activated: false,
        userid: 9,
        password: 'byq7Ic',
        accesstoken: 'e503dc68651a472e686615349a77c8f96752b98f249147d68dd3965799441c5e',
        location: {
            city: 'Tampa',
            country: 'United States',
            state: 'Florida',
            zip: '33686',
            loc: { longitude: '-82.4388', latitude: '27.872' }
        },
        url: 'www.tmckeefry.com',
        firstname: 'Thomasa',
        lastname: 'McKeefry',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '1ANdf6GSQKHKLcuc8Te6fTXmtGAUEV9Qt7',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000121' },
        email: 'rbriston9@paginegialle.it',
        gender: 'M',
        description: 'Organized bandwidth-monitored circuit',
        username: 'rbriston9',
        activated: false,
        userid: 10,
        password: '7gLJOvc7hdU',
        accesstoken: '02303b101fe9375380387c5aa7dcbfd4e016ab6b3078429da34e0e0e0563b539',
        location: {
            city: 'Washington',
            country: 'United States',
            state: 'District of Columbia',
            zip: '20220',
            loc: { longitude: '-77.0146', latitude: '38.8933' }
        },
        url: 'www.rbriston.com',
        firstname: 'Roderich',
        lastname: 'Briston',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '1s1mJy6d9HLyerDZEm4EmT5NfY1Zjru8D',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000122' },
        email: 'fspearetta@soundcloud.com',
        gender: 'M',
        description: 'Focused zero administration hierarchy',
        username: 'fspearetta',
        activated: false,
        userid: 11,
        password: 'SvpU2FgWxf4',
        accesstoken: '2e60d38ae523e1f31471b4a0a2975a3823912bff8ed3fa117dabee1bdd246e55',
        location: {
            city: 'Las Vegas',
            country: 'United States',
            state: 'Nevada',
            zip: '89140',
            loc: { longitude: '-115.1471', latitude: '36.086' }
        },
        url: 'www.fspearett.com',
        firstname: 'Field',
        lastname: 'Spearett',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '168qLQfCn3BEY2RHcutGbvodAi8bvp7xTR',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000123' },
        email: 'mklicheb@soundcloud.com',
        gender: 'F',
        description: 'Universal object-oriented website',
        username: 'mklicheb',
        activated: false,
        userid: 12,
        password: 'DpzSd5clD',
        accesstoken: '77affaa15c8ac37959d6376daa1ee5fec19974e8dfcaa78b7ea7452dd946a8f9',
        location: {
            city: 'Prescott',
            country: 'United States',
            state: 'Arizona',
            zip: '86305',
            loc: { longitude: '-112.9584', latitude: '34.8185' }
        },
        url: 'www.mkliche.com',
        firstname: 'May',
        lastname: 'Kliche',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '1HbL9YZQ6STjphHnLFtjKfamRG9bm8fF1m',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000124' },
        email: 'bbreewoodc@mysql.com',
        gender: 'M',
        description: 'Phased 24/7 productivity',
        username: 'bbreewoodc',
        activated: true,
        userid: 13,
        password: 'mBP3gSfwZVkr',
        accesstoken: '95326c97107b59879d4daae2e2fac4ec186e9fb1d7baad01a45066fb3ff20004',
        location: {
            city: 'Las Vegas',
            country: 'United States',
            state: 'Nevada',
            zip: '89155',
            loc: { longitude: '-114.9721', latitude: '35.9279' }
        },
        url: 'www.bbreewood.com',
        firstname: 'Bernarr',
        lastname: 'Breewood',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '1EWvNk2YxrkHd3jmy5GsF3gPb5mo7nVJ38',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000125' },
        email: 'rpollokd@yandex.ru',
        gender: 'F',
        description: 'Team-oriented bottom-line challenge',
        username: 'rpollokd',
        activated: true,
        userid: 14,
        password: 'XxQjPWaGyApD',
        accesstoken: 'b437e311ecbb33c4631f6421f331d0e3787699463e554bc0805e9057acfefacd',
        location: {
            city: 'Honolulu',
            country: 'United States',
            state: 'Hawaii',
            zip: '96845',
            loc: { longitude: '-157.8294', latitude: '21.3278' }
        },
        url: 'www.rpollok.com',
        firstname: 'Rosene',
        lastname: 'Pollok',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '1ARB7Jzi1L2aDacxbRkd2QT7hvnvfHxSfo',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000126' },
        email: 'nmartonfie@wisc.edu',
        gender: 'M',
        description: 'Monitored grid-enabled functionalities',
        username: 'nmartonfie',
        activated: false,
        userid: 15,
        password: 'wmm6Ae9ZN',
        accesstoken: '8a36a6bbc2ae8b7476a697ed585009e31b0da2498c4ded57e55041d9e6a15315',
        location: {
            city: 'Missoula',
            country: 'United States',
            state: 'Montana',
            zip: '59806',
            loc: { longitude: '-114.0498', latitude: '47.116' }
        },
        url: 'www.nmartonfi.com',
        firstname: 'Nevins',
        lastname: 'Martonfi',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '1DsqkYhstptiHNkbvVcuKcKEFsicbYtTSi',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000127' },
        email: 'rhealeasf@dailymail.co.uk',
        gender: 'F',
        description: 'Implemented system-worthy capability',
        username: 'rhealeasf',
        activated: true,
        userid: 16,
        password: 'SEoTUpIFKn4u',
        accesstoken: '9507c1b5f7c789c7ae82e1024bde42722295cc559f123f42b566449e2fc07db7',
        location: {
            city: 'Grand Rapids',
            country: 'United States',
            state: 'Michigan',
            zip: '49560',
            loc: { longitude: '-85.5503', latitude: '43.0314' }
        },
        url: 'www.rhealeas.com',
        firstname: 'Rosette',
        lastname: 'Healeas',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '18QR3TLChapTWoqT33PmbnE9nZ5xk9Dkn2',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000128' },
        email: 'tsimesterg@aboutads.info',
        gender: 'M',
        description: 'Intuitive regional functionalities',
        username: 'tsimesterg',
        activated: false,
        userid: 17,
        password: 'kH3KVV0dGbkv',
        accesstoken: 'a8111c2ec0cc31f3c81879b150cc2da46c7195b6bb528d4718d1c84ff1adaa22',
        location: {
            city: 'Evansville',
            country: 'United States',
            state: 'Indiana',
            zip: '47719',
            loc: { longitude: '-87.575', latitude: '37.9971' }
        },
        url: 'www.tsimester.com',
        firstname: 'Teodorico',
        lastname: 'Simester',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '17T2U7R6Ayh3CQapUqNiQ9o2TuDzz9i49A',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b14000129' },
        email: 'hdudlestonh@sakura.ne.jp',
        gender: 'F',
        description: 'Polarised zero tolerance monitoring',
        username: 'hdudlestonh',
        activated: false,
        userid: 18,
        password: 'YDlqtJRn',
        accesstoken: '5758a8dbea0a9cc3005864bdea7f715796e08fcbc3c0050c8b7b1d39e08fc2c8',
        location: {
            city: 'Washington',
            country: 'United States',
            state: 'District of Columbia',
            zip: '20380',
            loc: { longitude: '-77.0146', latitude: '38.8933' }
        },
        url: 'www.hdudleston.com',
        firstname: 'Henriette',
        lastname: 'Dudleston',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '1JgDQxSHtepWx1KJ9pnBANLMA3si89qcY5',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400012a' },
        email: 'sbenthami@ihg.com',
        gender: 'F',
        description: 'Persistent composite portal',
        username: 'sbenthami',
        activated: true,
        userid: 19,
        password: 'Rn9exDOh6',
        accesstoken: 'feab51d7afa820e77b9ce8bca236a061c19e6f66088ee126721d1a4069d5e0dc',
        location: {
            city: 'Chicago',
            country: 'United States',
            state: 'Illinois',
            zip: '60681',
            loc: { longitude: '-87.6873', latitude: '41.8119' }
        },
        url: 'www.sbentham.com',
        firstname: 'Shanie',
        lastname: 'Bentham',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '13FFvExRmLKb9RtQMJZYjdCUtSf3sFjZTj',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400012b' },
        email: 'lmaddicksj@woothemes.com',
        gender: 'M',
        description: 'User-centric attitude-oriented instruction set',
        username: 'lmaddicksj',
        activated: true,
        userid: 20,
        password: 'odUJtdx',
        accesstoken: '15bfc316e293607135eaa5df9e6d89d9469394e17dbe79e94c3ec6d5e67b8adb',
        location: {
            city: 'Clearwater',
            country: 'United States',
            state: 'Florida',
            zip: '34620',
            loc: { longitude: '-82.7157', latitude: '27.9139' }
        },
        url: 'www.lmaddicks.com',
        firstname: 'Lionello',
        lastname: 'Maddicks',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '16Qf9nKLWkc74YoDrerFSkcgAieFLiic5T',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400012c' },
        email: 'ksherwillk@ucoz.com',
        gender: 'M',
        description: 'Sharable 24 hour parallelism',
        username: 'ksherwillk',
        activated: false,
        userid: 21,
        password: 'u1tBZmjEXe',
        accesstoken: 'cbb619248bfca93f147161a5c9926cbac8bf4879492cec3441e8f4fcc9701b53',
        location: {
            city: 'Fort Wayne',
            country: 'United States',
            state: 'Indiana',
            zip: '46862',
            loc: { longitude: '-85.0707', latitude: '41.0938' }
        },
        url: 'www.ksherwill.com',
        firstname: 'Kendell',
        lastname: 'Sherwill',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '1KFoQZ4kARQNbQCHK7sHPfVfh119i5YQeE',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400012d' },
        email: 'rblazevicl@senate.gov',
        gender: 'F',
        description: 'Networked solution-oriented open architecture',
        username: 'rblazevicl',
        activated: true,
        userid: 22,
        password: 'HNwlbrFv',
        accesstoken: '7cd714564cca33f9344eb3fb1c41abe95a4eec5315e3577a3f12278c068f0f1f',
        location: {
            city: 'Colorado Springs',
            country: 'United States',
            state: 'Colorado',
            zip: '80935',
            loc: { longitude: '-104.562', latitude: '38.8247' }
        },
        url: 'www.rblazevic.com',
        firstname: 'Rosemary',
        lastname: 'Blazevic',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '17yRhTQnMjyAP3ZFYuzAdX1RcQZmFmFLiP',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400012e' },
        email: 'szorenerm@biblegateway.com',
        gender: 'M',
        description: 'Mandatory maximized productivity',
        username: 'szorenerm',
        activated: false,
        userid: 23,
        password: 'zC8wGPLjsj',
        accesstoken: 'baa8cff019f95e241b2d8906877f209c4d628bfc34a7123a9256a7a01a80c2b7',
        location: {
            city: 'Tucson',
            country: 'United States',
            state: 'Arizona',
            zip: '85737',
            loc: { longitude: '-110.9466', latitude: '32.4142' }
        },
        url: 'www.szorener.com',
        firstname: 'Shermie',
        lastname: 'Zorener',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '1BGXcSHKLkqzJunD9fv9FhTc1JGaraaL8z',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
    {
        _id: { '$oid': '59456d2dfc13ae3b1400012f' },
        email: 'brecklessn@dailymotion.com',
        gender: 'M',
        description: 'Public-key content-based leverage',
        username: 'brecklessn',
        activated: false,
        userid: 24,
        password: 'MgOCxVnM1qL',
        accesstoken: 'dd63b8ec7fa0c193414d615aa9596901a9cf7267d47e0e95a93b8de7b9c2191a',
        location: {
            city: 'Washington',
            country: 'United States',
            state: 'District of Columbia',
            zip: '56944',
            loc: { longitude: '-77.0365', latitude: '38.8952' }
        },
        url: 'www.breckless.com',
        firstname: 'Benyamin',
        lastname: 'Reckless',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'basic',
        apiKey: '1PjvbgD6phgpr2covj79p7A1Zm27fSMM',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    }, {
        _id: { '$oid': '59456d2dfc13ae3b14000130' },
        email: 'vgullifordo@google.es',
        gender: 'M',
        description: 'Diverse neutral protocol',
        username: 'vgullifordo',
        activated: true,
        userid: 25,
        password: 'LL1X0z',
        accesstoken: '7000842e6731cd44f318c4cbafe5ada5d458aa29e18d1390f94fc7b39154c826',
        location: {
            city: 'Fresno',
            country: 'United States',
            state: 'California',
            zip: '93762',
            loc: { longitude: '-119.6397', latitude: '36.7464' }
        },
        url: 'www.vgulliford.com',
        firstname: 'Von',
        lastname: 'Gulliford',
        birthday: randomDate(new Date(1930, 0, 1), new Date(2000, 0, 1)),
        accounttype: 'admin',
        apiKey: '1M9AGWVf5sVywE571Y4h4T1RmhXxTps1Xf',
        random: randNum(),
        assets: [{ '$oid': '59457d25fc13ae380c000280' }],
        primaryasset: { '$oid': '59457d25fc13ae380c000280' },
        coverimages: [{ '$oid': '59457d25fc13ae380c000280' }],
        coverimage: { '$oid': '59457d25fc13ae380c000280' },
        userroles: [{ '$oid': '594585ddfc13ae3b14000133' }],
        tags: [{ '$oid': '594585ddfc13ae3b14000149' }],
        categories: [{ '$oid': '594585ddfc13ae3b14000148' }],
        contenttypes: [{
            '$oid': '594585ddfc13ae3b14000144'
        }],
    },
];

module.exports = users;