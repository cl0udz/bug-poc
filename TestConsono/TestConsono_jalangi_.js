J$.iids = {"9":[2,16,2,23],"17":[2,24,2,33],"25":[2,16,2,34],"33":[3,11,3,19],"41":[3,11,3,27],"49":[2,16,2,34],"57":[2,16,2,34],"65":[3,11,3,27],"73":[3,11,3,27],"81":[9,10,9,11],"89":[8,9,9,13],"97":[11,10,11,11],"105":[11,13,11,14],"113":[11,16,11,17],"121":[11,9,11,18],"129":[7,12,11,20],"137":[7,12,11,20],"145":[7,12,11,20],"153":[15,10,15,17],"161":[15,18,15,26],"169":[15,10,15,27],"177":[15,10,15,27],"185":[15,3,15,28],"193":[14,1,16,2],"201":[14,1,16,2],"209":[14,1,16,2],"217":[19,1,19,5],"225":[19,6,19,10],"233":[19,1,19,11],"241":[19,1,19,12],"249":[1,1,19,12],"257":[1,1,19,12],"265":[1,1,19,12],"273":[1,1,19,12],"281":[14,1,16,2],"289":[1,1,19,12],"297":[14,1,16,2],"305":[14,1,16,2],"313":[1,1,19,12],"321":[1,1,19,12],"nBranches":0,"originalCodeFileName":"/home/james/nodejs/ExpoSE/target/TestConsono/TestConsono.js","instrumentedCodeFileName":"/home/james/nodejs/ExpoSE/target/TestConsono/TestConsono_jalangi_.js","code":"\"use strict\";\n\nvar _require = require(\"consono\"),\n    consono = _require.consono;\n\n//var utils = require('../TestcaseUtils.js');\n\nvar json = {\n  key1: {\n    \"a\": 1\n  },\n  key2: [2, 3, 4]\n};\n\nfunction test(userJson) {\n  return consono(userJson);\n}\n\n//utils.entry(test, json);\ntest(json);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(249, '/home/james/nodejs/ExpoSE/target/TestConsono/TestConsono_jalangi_.js', '/home/james/nodejs/ExpoSE/target/TestConsono/TestConsono.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            userJson = J$.N(209, 'userJson', userJson, 4);
                            return J$.X1(185, J$.Rt(177, J$.F(169, J$.R(153, 'consono', consono, 1), 0)(J$.R(161, 'userJson', userJson, 0))));
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(257, '_require', _require, 0);
            J$.N(265, 'consono', consono, 0);
            J$.N(273, 'json', json, 0);
            test = J$.N(289, 'test', J$.T(281, test, 12, false, 193), 0);
            var _require = J$.X1(57, J$.W(49, '_require', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "consono", 21, false)), _require, 3)), consono = J$.X1(73, J$.W(65, 'consono', J$.G(41, J$.R(33, '_require', _require, 1), 'consono', 0), consono, 3));
            var json = J$.X1(145, J$.W(137, 'json', J$.T(129, {
                key1: J$.T(89, {
                    "a": J$.T(81, 1, 22, false)
                }, 11, false),
                key2: J$.T(121, [
                    J$.T(97, 2, 22, false),
                    J$.T(105, 3, 22, false),
                    J$.T(113, 4, 22, false)
                ], 10, false)
            }, 11, false), json, 3));
            J$.X1(241, J$.F(233, J$.R(217, 'test', test, 1), 0)(J$.R(225, 'json', json, 1)));
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
