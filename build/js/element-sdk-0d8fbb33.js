(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8591],{74083:function(e,a,d){"use strict";var c=this&&this.__values||function(e){var a="function"==typeof Symbol&&Symbol.iterator,d=a&&e[a],c=0;if(d)return d.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&c>=e.length&&(e=void 0),{value:e&&e[c++],done:!e}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")},b=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.chains=a._getInitializedChains=void 0;var f=b(d(92555)),t=b(d(19789)),n=b(d(51334)),x=b(d(67426)),r=b(d(25597)),i=b(d(41024));function o(e){var a,d,b={1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli",11155111:"sepolia"},o={mainnet:f.default,ropsten:t.default,rinkeby:n.default,kovan:x.default,goerli:r.default,sepolia:i.default};if(e)try{for(var s=c(e),p=s.next();!p.done;p=s.next()){var l=p.value,u=l.name;b[l.chainId.toString()]=u,o[u]=l}}catch(e){a={error:e}}finally{try{p&&!p.done&&(d=s.return)&&d.call(s)}finally{if(a)throw a.error}}return o.names=b,o}a._getInitializedChains=o,a.chains=o()},97616:(e,a,d)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.EIPs=void 0,a.EIPs={1153:d(56749),1559:d(50574),2315:d(97386),2537:d(5258),2565:d(36011),2718:d(33387),2929:d(30451),2930:d(44052),3198:d(50781),3529:d(47457),3540:d(11027),3541:d(85151),3554:d(35705),3607:d(63305),3651:d(25387),3670:d(47234),3675:d(60312),3855:d(67521),3860:d(1754),4345:d(97304),4399:d(79320),5133:d(47349)}},37459:(e,a,d)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.hardforks=void 0,a.hardforks=[["chainstart",d(11156)],["homestead",d(1498)],["dao",d(44342)],["tangerineWhistle",d(22970)],["spuriousDragon",d(41291)],["byzantium",d(96386)],["constantinople",d(20186)],["petersburg",d(22369)],["istanbul",d(82820)],["muirGlacier",d(64090)],["berlin",d(6546)],["london",d(82246)],["shanghai",d(89370)],["arrowGlacier",d(13435)],["grayGlacier",d(52805)],["mergeForkIdTransition",d(25704)],["merge",d(62564)]]},2832:function(e,a,d){"use strict";var c,b=d(48764).Buffer,f=this&&this.__extends||(c=function(e,a){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(e[d]=a[d])},c(e,a)},function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function d(){this.constructor=e}c(e,a),e.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}),t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var a,d=1,c=arguments.length;d<c;d++)for(var b in a=arguments[d])Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=a[b]);return e},t.apply(this,arguments)},n=this&&this.__values||function(e){var a="function"==typeof Symbol&&Symbol.iterator,d=a&&e[a],c=0;if(d)return d.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&c>=e.length&&(e=void 0),{value:e&&e[c++],done:!e}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(a,"__esModule",{value:!0}),a.ConsensusAlgorithm=a.ConsensusType=a.Hardfork=a.Chain=a.CustomChain=void 0;var x,r,i=d(17187),o=d(34606),s=d(22751),p=d(74083),l=d(37459),u=d(97616);!function(e){e.PolygonMainnet="polygon-mainnet",e.PolygonMumbai="polygon-mumbai",e.ArbitrumRinkebyTestnet="arbitrum-rinkeby-testnet",e.xDaiChain="x-dai-chain",e.OptimisticKovan="optimistic-kovan",e.OptimisticEthereum="optimistic-ethereum"}(x=a.CustomChain||(a.CustomChain={})),function(e){e[e.Mainnet=1]="Mainnet",e[e.Ropsten=3]="Ropsten",e[e.Rinkeby=4]="Rinkeby",e[e.Kovan=42]="Kovan",e[e.Goerli=5]="Goerli",e[e.Sepolia=11155111]="Sepolia"}(a.Chain||(a.Chain={})),function(e){e.Chainstart="chainstart",e.Homestead="homestead",e.Dao="dao",e.TangerineWhistle="tangerineWhistle",e.SpuriousDragon="spuriousDragon",e.Byzantium="byzantium",e.Constantinople="constantinople",e.Petersburg="petersburg",e.Istanbul="istanbul",e.MuirGlacier="muirGlacier",e.Berlin="berlin",e.London="london",e.ArrowGlacier="arrowGlacier",e.GrayGlacier="grayGlacier",e.MergeForkIdTransition="mergeForkIdTransition",e.Merge="merge",e.Shanghai="shanghai"}(r=a.Hardfork||(a.Hardfork={})),function(e){e.ProofOfStake="pos",e.ProofOfWork="pow",e.ProofOfAuthority="poa"}(a.ConsensusType||(a.ConsensusType={})),function(e){e.Ethash="ethash",e.Clique="clique",e.Casper="casper"}(a.ConsensusAlgorithm||(a.ConsensusAlgorithm={}));var y=function(e){function a(a){var d,c,b,f,t=this;(t=e.call(this)||this)._supportedHardforks=[],t._eips=[],t._customChains=null!==(b=a.customChains)&&void 0!==b?b:[],t._chainParams=t.setChain(a.chain),t.DEFAULT_HARDFORK=null!==(f=t._chainParams.defaultHardfork)&&void 0!==f?f:r.Istanbul;try{for(var x=n(t._chainParams.hardforks),i=x.next();!i.done;i=x.next()){var o=i.value;o.forkHash||(o.forkHash=t._calcForkHash(o.name))}}catch(e){d={error:e}}finally{try{i&&!i.done&&(c=x.return)&&c.call(x)}finally{if(d)throw d.error}}return t._hardfork=t.DEFAULT_HARDFORK,a.supportedHardforks&&(t._supportedHardforks=a.supportedHardforks),a.hardfork&&t.setHardfork(a.hardfork),a.eips&&t.setEIPs(a.eips),t}return f(a,e),a.custom=function(e,d){var c;void 0===d&&(d={});var b=null!==(c=d.baseChain)&&void 0!==c?c:"mainnet",f=t({},a._getChainParams(b));if(f.name="custom-chain","string"!=typeof e)return new a(t({chain:t(t({},f),e)},d));if(e===x.PolygonMainnet)return a.custom({name:x.PolygonMainnet,chainId:137,networkId:137},d);if(e===x.PolygonMumbai)return a.custom({name:x.PolygonMumbai,chainId:80001,networkId:80001},d);if(e===x.ArbitrumRinkebyTestnet)return a.custom({name:x.ArbitrumRinkebyTestnet,chainId:421611,networkId:421611},d);if(e===x.xDaiChain)return a.custom({name:x.xDaiChain,chainId:100,networkId:100},d);if(e===x.OptimisticKovan)return a.custom({name:x.OptimisticKovan,chainId:69,networkId:69},t({hardfork:r.Berlin},d));if(e===x.OptimisticEthereum)return a.custom({name:x.OptimisticEthereum,chainId:10,networkId:10},t({hardfork:r.Berlin},d));throw new Error("Custom chain ".concat(e," not supported"))},a.forCustomChain=function(e,d,c,b){var f=a._getChainParams(e);return new a({chain:t(t({},f),d),hardfork:c,supportedHardforks:b})},a.isSupportedChainId=function(e){var a=(0,p._getInitializedChains)();return Boolean(a.names[e.toString()])},a._getChainParams=function(e,a){var d=(0,p._getInitializedChains)(a);if("number"==typeof e||s.BN.isBN(e)){if(e=e.toString(),d.names[e])return d[d.names[e]];throw new Error("Chain with ID ".concat(e," not supported"))}if(d[e])return d[e];throw new Error("Chain with name ".concat(e," not supported"))},a.prototype.setChain=function(e){var d,c;if("number"==typeof e||"string"==typeof e||s.BN.isBN(e)){var b=void 0;b=this._customChains&&this._customChains.length>0&&Array.isArray(this._customChains[0])?this._customChains.map((function(e){return e[0]})):this._customChains,this._chainParams=a._getChainParams(e,b)}else{if("object"!=typeof e)throw new Error("Wrong input format");if(this._customChains.length>0)throw new Error("Chain must be a string, number, or BN when initialized with customChains passed in");try{for(var f=n(["networkId","genesis","hardforks","bootstrapNodes"]),t=f.next();!t.done;t=f.next()){var x=t.value;if(void 0===e[x])throw new Error("Missing required chain parameter: ".concat(x))}}catch(e){d={error:e}}finally{try{t&&!t.done&&(c=f.return)&&c.call(f)}finally{if(d)throw d.error}}this._chainParams=e}return this._chainParams},a.prototype.setHardfork=function(e){var a,d;if(!this._isSupportedHardfork(e))throw new Error("Hardfork ".concat(e," not set as supported in supportedHardforks"));var c=!1;try{for(var b=n(l.hardforks),f=b.next();!f.done;f=b.next()){f.value[0]===e&&(this._hardfork!==e&&(this._hardfork=e,this.emit("hardforkChanged",e)),c=!0)}}catch(e){a={error:e}}finally{try{f&&!f.done&&(d=b.return)&&d.call(b)}finally{if(a)throw a.error}}if(!c)throw new Error("Hardfork with name ".concat(e," not supported"))},a.prototype.getHardforkByBlockNumber=function(e,a){var d,c;e=(0,s.toType)(e,s.TypeOutput.BN),a=(0,s.toType)(a,s.TypeOutput.BN);var b,f,t,x=r.Chainstart;try{for(var i=n(this.hardforks()),o=i.next();!o.done;o=i.next()){var p=o.value;if(null!==p.block)e.gte(new s.BN(p.block))&&(x=p.name),a&&p.td&&(a.gte(new s.BN(p.td))?b=p.name:f=t),t=p.name;else if(null!=a&&void 0!==p.td&&null!==p.td&&a.gte(new s.BN(p.td)))return p.name}}catch(e){d={error:e}}finally{try{o&&!o.done&&(c=i.return)&&c.call(i)}finally{if(d)throw d.error}}if(a){var l="block number: ".concat(e," (-> ").concat(x,"), ");if(b&&!this.hardforkGteHardfork(x,b)){var u="HF determined by block number is lower than the minimum total difficulty HF";throw l+="total difficulty: ".concat(a," (-> ").concat(b,")"),new Error("".concat(u,": ").concat(l))}if(f&&!this.hardforkGteHardfork(f,x)){u="Maximum HF determined by total difficulty is lower than the block number HF";throw l+="total difficulty: ".concat(a," (-> ").concat(f,")"),new Error("".concat(u,": ").concat(l))}}return x},a.prototype.setHardforkByBlockNumber=function(e,a){var d=this.getHardforkByBlockNumber(e,a);return this.setHardfork(d),d},a.prototype._chooseHardfork=function(e,a){if(void 0===a&&(a=!0),e){if(a&&!this._isSupportedHardfork(e))throw new Error("Hardfork ".concat(e," not set as supported in supportedHardforks"))}else e=this._hardfork;return e},a.prototype._getHardfork=function(e){var a,d,c=this.hardforks();try{for(var b=n(c),f=b.next();!f.done;f=b.next()){var t=f.value;if(t.name===e)return t}}catch(e){a={error:e}}finally{try{f&&!f.done&&(d=b.return)&&d.call(b)}finally{if(a)throw a.error}}throw new Error("Hardfork ".concat(e," not defined for chain ").concat(this.chainName()))},a.prototype._isSupportedHardfork=function(e){var a,d;if(!(this._supportedHardforks.length>0))return!0;try{for(var c=n(this._supportedHardforks),b=c.next();!b.done;b=c.next()){if(e===b.value)return!0}}catch(e){a={error:e}}finally{try{b&&!b.done&&(d=c.return)&&d.call(c)}finally{if(a)throw a.error}}return!1},a.prototype.setEIPs=function(e){var a,d,c=this;void 0===e&&(e=[]);var b=function(a){if(!(a in u.EIPs))throw new Error("".concat(a," not supported"));var d=f.gteHardfork(u.EIPs[a].minimumHardfork);if(!d)throw new Error("".concat(a," cannot be activated on hardfork ").concat(f.hardfork(),", minimumHardfork: ").concat(d));u.EIPs[a].requiredEIPs&&u.EIPs[a].requiredEIPs.forEach((function(d){if(!e.includes(d)&&!c.isActivatedEIP(d))throw new Error("".concat(a," requires EIP ").concat(d,", but is not included in the EIP list"))}))},f=this;try{for(var t=n(e),x=t.next();!x.done;x=t.next()){b(x.value)}}catch(e){a={error:e}}finally{try{x&&!x.done&&(d=t.return)&&d.call(t)}finally{if(a)throw a.error}}this._eips=e},a.prototype.param=function(e,a){var d,c,b=null;try{for(var f=n(this._eips),t=f.next();!t.done;t=f.next()){var x=t.value;if(null!==(b=this.paramByEIP(e,a,x)))return b}}catch(e){d={error:e}}finally{try{t&&!t.done&&(c=f.return)&&c.call(f)}finally{if(d)throw d.error}}return this.paramByHardfork(e,a,this._hardfork)},a.prototype.paramByHardfork=function(e,a,d){var c,b,f,t;d=this._chooseHardfork(d);var x=null;try{for(var r=n(l.hardforks),i=r.next();!i.done;i=r.next()){var o=i.value;if("eips"in o[1]){var s=o[1].eips;try{for(var p=(f=void 0,n(s)),u=p.next();!u.done;u=p.next()){var y=u.value,m=this.paramByEIP(e,a,y);x=null!==m?m:x}}catch(e){f={error:e}}finally{try{u&&!u.done&&(t=p.return)&&t.call(p)}finally{if(f)throw f.error}}}else{if(!o[1][e])throw new Error("Topic ".concat(e," not defined"));void 0!==o[1][e][a]&&(x=o[1][e][a].v)}if(o[0]===d)break}}catch(e){c={error:e}}finally{try{i&&!i.done&&(b=r.return)&&b.call(r)}finally{if(c)throw c.error}}return x},a.prototype.paramByEIP=function(e,a,d){if(!(d in u.EIPs))throw new Error("".concat(d," not supported"));var c=u.EIPs[d];if(!(e in c))throw new Error("Topic ".concat(e," not defined"));return void 0===c[e][a]?null:c[e][a].v},a.prototype.paramByBlock=function(e,a,d){var c=this.activeHardforks(d),b=c[c.length-1].name;return this.paramByHardfork(e,a,b)},a.prototype.isActivatedEIP=function(e){var a,d;if(this.eips().includes(e))return!0;try{for(var c=n(l.hardforks),b=c.next();!b.done;b=c.next()){var f=b.value[1];if(this.gteHardfork(f.name)&&"eips"in f&&f.eips.includes(e))return!0}}catch(e){a={error:e}}finally{try{b&&!b.done&&(d=c.return)&&d.call(c)}finally{if(a)throw a.error}}return!1},a.prototype.hardforkIsActiveOnBlock=function(e,a,d){var c;void 0===d&&(d={}),a=(0,s.toType)(a,s.TypeOutput.BN);var b=null!==(c=d.onlySupported)&&void 0!==c&&c;e=this._chooseHardfork(e,b);var f=this.hardforkBlockBN(e);return!(!f||!a.gte(f))},a.prototype.activeOnBlock=function(e,a){return this.hardforkIsActiveOnBlock(null,e,a)},a.prototype.hardforkGteHardfork=function(e,a,d){var c,b;void 0===d&&(d={});var f,t=void 0!==d.onlyActive&&d.onlyActive;e=this._chooseHardfork(e,d.onlySupported),f=t?this.activeHardforks(null,d):this.hardforks();var x=-1,r=-1,i=0;try{for(var o=n(f),s=o.next();!s.done;s=o.next()){var p=s.value;p.name===e&&(x=i),p.name===a&&(r=i),i+=1}}catch(e){c={error:e}}finally{try{s&&!s.done&&(b=o.return)&&b.call(o)}finally{if(c)throw c.error}}return x>=r&&-1!==r},a.prototype.gteHardfork=function(e,a){return this.hardforkGteHardfork(null,e,a)},a.prototype.hardforkIsActiveOnChain=function(e,a){var d,c,b;void 0===a&&(a={});var f=null!==(b=a.onlySupported)&&void 0!==b&&b;e=this._chooseHardfork(e,f);try{for(var t=n(this.hardforks()),x=t.next();!x.done;x=t.next()){var r=x.value;if(r.name===e&&null!==r.block)return!0}}catch(e){d={error:e}}finally{try{x&&!x.done&&(c=t.return)&&c.call(t)}finally{if(d)throw d.error}}return!1},a.prototype.activeHardforks=function(e,a){var d,c;void 0===a&&(a={});var b=[],f=this.hardforks();try{for(var t=n(f),x=t.next();!x.done;x=t.next()){var r=x.value;if(null!==r.block){if(null!=e&&e<r.block)break;a.onlySupported&&!this._isSupportedHardfork(r.name)||b.push(r)}}}catch(e){d={error:e}}finally{try{x&&!x.done&&(c=t.return)&&c.call(t)}finally{if(d)throw d.error}}return b},a.prototype.activeHardfork=function(e,a){void 0===a&&(a={});var d=this.activeHardforks(e,a);if(d.length>0)return d[d.length-1].name;throw new Error("No (supported) active hardfork found")},a.prototype.hardforkBlock=function(e){var a=this.hardforkBlockBN(e);return(0,s.toType)(a,s.TypeOutput.Number)},a.prototype.hardforkBlockBN=function(e){e=this._chooseHardfork(e,!1);var a=this._getHardfork(e).block;return null==a?null:new s.BN(a)},a.prototype.hardforkTD=function(e){e=this._chooseHardfork(e,!1);var a=this._getHardfork(e).td;return null==a?null:new s.BN(a)},a.prototype.isHardforkBlock=function(e,a){e=(0,s.toType)(e,s.TypeOutput.BN),a=this._chooseHardfork(a,!1);var d=this.hardforkBlockBN(a);return!!d&&d.eq(e)},a.prototype.nextHardforkBlock=function(e){var a=this.nextHardforkBlockBN(e);return(0,s.toType)(a,s.TypeOutput.Number)},a.prototype.nextHardforkBlockBN=function(e){e=this._chooseHardfork(e,!1);var a=this.hardforkBlockBN(e);return null===a?null:this.hardforks().reduce((function(e,d){var c=new s.BN(d.block);return c.gt(a)&&null===e?c:e}),null)},a.prototype.isNextHardforkBlock=function(e,a){e=(0,s.toType)(e,s.TypeOutput.BN),a=this._chooseHardfork(a,!1);var d=this.nextHardforkBlockBN(a);return null!==d&&d.eq(e)},a.prototype._calcForkHash=function(e){var a,d,c=b.from(this.genesis().hash.substr(2),"hex"),f=b.alloc(0),t=0;try{for(var x=n(this.hardforks()),r=x.next();!r.done;r=x.next()){var i=r.value,p=i.block;if(0!==p&&null!==p&&p!==t){var l=b.from(p.toString(16).padStart(16,"0"),"hex");f=b.concat([f,l])}if(i.name===e)break;null!==p&&(t=p)}}catch(e){a={error:e}}finally{try{r&&!r.done&&(d=x.return)&&d.call(x)}finally{if(a)throw a.error}}var u=b.concat([c,f]),y=(0,s.intToBuffer)((0,o.buf)(u)>>>0).toString("hex");return"0x".concat(y)},a.prototype.forkHash=function(e){e=this._chooseHardfork(e,!1);var a=this._getHardfork(e);if(null===a.block&&void 0===a.td){throw new Error("No fork hash calculation possible for future hardfork")}return void 0!==a.forkHash?a.forkHash:this._calcForkHash(e)},a.prototype.hardforkForForkHash=function(e){var a=this.hardforks().filter((function(a){return a.forkHash===e}));return a.length>=1?a[a.length-1]:null},a.prototype.genesis=function(){return this._chainParams.genesis},a.prototype.genesisState=function(){var e,a;switch(this.chainName()){case"mainnet":return d(94449);case"ropsten":return d(80050);case"rinkeby":return d(22286);case"kovan":return d(83225);case"goerli":return d(70464);case"sepolia":return d(19947)}if(this._customChains&&this._customChains.length>0&&Array.isArray(this._customChains[0]))try{for(var c=n(this._customChains),b=c.next();!b.done;b=c.next()){var f=b.value;if(f[0].name===this.chainName())return f[1]}}catch(a){e={error:a}}finally{try{b&&!b.done&&(a=c.return)&&a.call(c)}finally{if(e)throw e.error}}return{}},a.prototype.hardforks=function(){return this._chainParams.hardforks},a.prototype.bootstrapNodes=function(){return this._chainParams.bootstrapNodes},a.prototype.dnsNetworks=function(){return this._chainParams.dnsNetworks},a.prototype.hardfork=function(){return this._hardfork},a.prototype.chainId=function(){return(0,s.toType)(this.chainIdBN(),s.TypeOutput.Number)},a.prototype.chainIdBN=function(){return new s.BN(this._chainParams.chainId)},a.prototype.chainName=function(){return this._chainParams.name},a.prototype.networkId=function(){return(0,s.toType)(this.networkIdBN(),s.TypeOutput.Number)},a.prototype.networkIdBN=function(){return new s.BN(this._chainParams.networkId)},a.prototype.eips=function(){return this._eips},a.prototype.consensusType=function(){var e,a,d,c=this.hardfork();try{for(var b=n(l.hardforks),f=b.next();!f.done;f=b.next()){var t=f.value;if("consensus"in t[1]&&(d=t[1].consensus.type),t[0]===c)break}}catch(a){e={error:a}}finally{try{f&&!f.done&&(a=b.return)&&a.call(b)}finally{if(e)throw e.error}}return d||this._chainParams.consensus.type},a.prototype.consensusAlgorithm=function(){var e,a,d,c=this.hardfork();try{for(var b=n(l.hardforks),f=b.next();!f.done;f=b.next()){var t=f.value;if("consensus"in t[1]&&(d=t[1].consensus.algorithm),t[0]===c)break}}catch(a){e={error:a}}finally{try{f&&!f.done&&(a=b.return)&&a.call(b)}finally{if(e)throw e.error}}return d||this._chainParams.consensus.algorithm},a.prototype.consensusConfig=function(){var e,a,d,c=this.hardfork();try{for(var b=n(l.hardforks),f=b.next();!f.done;f=b.next()){var t=f.value;if("consensus"in t[1]&&(d=t[1].consensus[t[1].consensus.algorithm]),t[0]===c)break}}catch(a){e={error:a}}finally{try{f&&!f.done&&(a=b.return)&&a.call(b)}finally{if(e)throw e.error}}if(d)return d;var x=this.consensusAlgorithm();return this._chainParams.consensus[x]},a.prototype.copy=function(){var e=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return e.removeAllListeners(),e},a}(i.EventEmitter);a.default=y},36225:function(e,a,d){"use strict";var c=this&&this.__createBinding||(Object.create?function(e,a,d,c){void 0===c&&(c=d);var b=Object.getOwnPropertyDescriptor(a,d);b&&!("get"in b?!a.__esModule:b.writable||b.configurable)||(b={enumerable:!0,get:function(){return a[d]}}),Object.defineProperty(e,c,b)}:function(e,a,d,c){void 0===c&&(c=d),e[c]=a[d]}),b=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),f=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var d in e)"default"!==d&&Object.prototype.hasOwnProperty.call(e,d)&&c(a,e,d);return b(a,e),a},t=this&&this.__values||function(e){var a="function"==typeof Symbol&&Symbol.iterator,d=a&&e[a],c=0;if(d)return d.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&c>=e.length&&(e=void 0),{value:e&&e[c++],done:!e}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__read||function(e,a){var d="function"==typeof Symbol&&e[Symbol.iterator];if(!d)return e;var c,b,f=d.call(e),t=[];try{for(;(void 0===a||a-- >0)&&!(c=f.next()).done;)t.push(c.value)}catch(e){b={error:e}}finally{try{c&&!c.done&&(d=f.return)&&d.call(f)}finally{if(b)throw b.error}}return t};Object.defineProperty(a,"__esModule",{value:!0}),a.BaseTransaction=void 0;var x=f(d(2832)),r=d(22751),i=d(63458),o=function(){function e(e,a){this.cache={hash:void 0,dataFee:void 0},this.activeCapabilities=[],this.DEFAULT_CHAIN=x.Chain.Mainnet,this.DEFAULT_HARDFORK=x.Hardfork.Istanbul;var d=e.nonce,c=e.gasLimit,b=e.to,f=e.value,t=e.data,n=e.v,i=e.r,o=e.s,s=e.type;this._type=new r.BN((0,r.toBuffer)(s)).toNumber(),this.txOptions=a;var p=(0,r.toBuffer)(""===b?"0x":b),l=(0,r.toBuffer)(""===n?"0x":n),u=(0,r.toBuffer)(""===i?"0x":i),y=(0,r.toBuffer)(""===o?"0x":o);this.nonce=new r.BN((0,r.toBuffer)(""===d?"0x":d)),this.gasLimit=new r.BN((0,r.toBuffer)(""===c?"0x":c)),this.to=p.length>0?new r.Address(p):void 0,this.value=new r.BN((0,r.toBuffer)(""===f?"0x":f)),this.data=(0,r.toBuffer)(""===t?"0x":t),this.v=l.length>0?new r.BN(l):void 0,this.r=u.length>0?new r.BN(u):void 0,this.s=y.length>0?new r.BN(y):void 0,this._validateCannotExceedMaxInteger({value:this.value,r:this.r,s:this.s}),this._validateCannotExceedMaxInteger({gasLimit:this.gasLimit},64),this._validateCannotExceedMaxInteger({nonce:this.nonce},64,!0)}return Object.defineProperty(e.prototype,"transactionType",{get:function(){return this.type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),e.prototype.supports=function(e){return this.activeCapabilities.includes(e)},e.prototype.validate=function(e){void 0===e&&(e=!1);var a=[];return this.getBaseFee().gt(this.gasLimit)&&a.push("gasLimit is too low. given ".concat(this.gasLimit,", need at least ").concat(this.getBaseFee())),this.isSigned()&&!this.verifySignature()&&a.push("Invalid Signature"),e?a:0===a.length},e.prototype.getBaseFee=function(){var e=this.getDataFee().addn(this.common.param("gasPrices","tx"));return this.common.gteHardfork("homestead")&&this.toCreationAddress()&&e.iaddn(this.common.param("gasPrices","txCreation")),e},e.prototype.getDataFee=function(){for(var e=this.common.param("gasPrices","txDataZero"),a=this.common.param("gasPrices","txDataNonZero"),d=0,c=0;c<this.data.length;c++)0===this.data[c]?d+=e:d+=a;if(d=new r.BN(d),(void 0===this.to||null===this.to)&&this.common.isActivatedEIP(3860)){var b=Math.ceil(this.data.length/32),f=new r.BN(this.common.param("gasPrices","initCodeWordCost")).imuln(b);d.iadd(f)}return d},e.prototype.toCreationAddress=function(){return void 0===this.to||0===this.to.buf.length},e.prototype.isSigned=function(){var e=this,a=e.v,d=e.r,c=e.s;return 0===this.type?!!(a&&d&&c):!(void 0===a||!d||!c)},e.prototype.verifySignature=function(){try{var e=this.getSenderPublicKey();return 0!==(0,r.unpadBuffer)(e).length}catch(e){return!1}},e.prototype.getSenderAddress=function(){return new r.Address((0,r.publicToAddress)(this.getSenderPublicKey()))},e.prototype.sign=function(e){if(32!==e.length){var a=this._errorMsg("Private key must be 32 bytes in length.");throw new Error(a)}var d=!1;0===this.type&&this.common.gteHardfork("spuriousDragon")&&!this.supports(i.Capability.EIP155ReplayProtection)&&(this.activeCapabilities.push(i.Capability.EIP155ReplayProtection),d=!0);var c=this.getMessageToSign(!0),b=(0,r.ecsign)(c,e),f=b.v,t=b.r,n=b.s,x=this._processSignature(f,t,n);if(d){var o=this.activeCapabilities.indexOf(i.Capability.EIP155ReplayProtection);o>-1&&this.activeCapabilities.splice(o,1)}return x},e.prototype._getCommon=function(e,a){var d;if(a){var c=new r.BN((0,r.toBuffer)(a));if(e){if(!e.chainIdBN().eq(c)){var b=this._errorMsg("The chain ID does not match the chain ID of Common");throw new Error(b)}return e.copy()}return x.default.isSupportedChainId(c)?new x.default({chain:c,hardfork:this.DEFAULT_HARDFORK}):x.default.forCustomChain(this.DEFAULT_CHAIN,{name:"custom-chain",networkId:c,chainId:c},this.DEFAULT_HARDFORK)}return null!==(d=null==e?void 0:e.copy())&&void 0!==d?d:new x.default({chain:this.DEFAULT_CHAIN,hardfork:this.DEFAULT_HARDFORK})},e.prototype._validateCannotExceedMaxInteger=function(e,a,d){var c,b;void 0===a&&(a=256),void 0===d&&(d=!1);try{for(var f=t(Object.entries(e)),x=f.next();!x.done;x=f.next()){var i=n(x.value,2),o=i[0],s=i[1];switch(a){case 64:if(d){if(null==s?void 0:s.gte(r.MAX_UINT64)){var p=this._errorMsg("".concat(o," cannot equal or exceed MAX_UINT64 (2^64-1), given ").concat(s));throw new Error(p)}}else if(null==s?void 0:s.gt(r.MAX_UINT64)){p=this._errorMsg("".concat(o," cannot exceed MAX_UINT64 (2^64-1), given ").concat(s));throw new Error(p)}break;case 256:if(d){if(null==s?void 0:s.gte(r.MAX_INTEGER)){p=this._errorMsg("".concat(o," cannot equal or exceed MAX_INTEGER (2^256-1), given ").concat(s));throw new Error(p)}}else if(null==s?void 0:s.gt(r.MAX_INTEGER)){p=this._errorMsg("".concat(o," cannot exceed MAX_INTEGER (2^256-1), given ").concat(s));throw new Error(p)}break;default:p=this._errorMsg("unimplemented bits value");throw new Error(p)}}}catch(e){c={error:e}}finally{try{x&&!x.done&&(b=f.return)&&b.call(f)}finally{if(c)throw c.error}}},e.prototype._getSharedErrorPostfix=function(){var e="";try{e=this.isSigned()?(0,r.bufferToHex)(this.hash()):"not available (unsigned)"}catch(a){e="error"}var a="";try{a=this.isSigned().toString()}catch(a){e="error"}var d="";try{d=this.common.hardfork()}catch(e){d="error"}var c="tx type=".concat(this.type," hash=").concat(e," nonce=").concat(this.nonce," value=").concat(this.value," ");return c+="signed=".concat(a," hf=").concat(d)},e}();a.BaseTransaction=o},47669:function(e,a,d){"use strict";var c,b=d(48764).Buffer,f=this&&this.__extends||(c=function(e,a){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(e[d]=a[d])},c(e,a)},function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function d(){this.constructor=e}c(e,a),e.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}),t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var a,d=1,c=arguments.length;d<c;d++)for(var b in a=arguments[d])Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=a[b]);return e},t.apply(this,arguments)},n=this&&this.__read||function(e,a){var d="function"==typeof Symbol&&e[Symbol.iterator];if(!d)return e;var c,b,f=d.call(e),t=[];try{for(;(void 0===a||a-- >0)&&!(c=f.next()).done;)t.push(c.value)}catch(e){b={error:e}}finally{try{c&&!c.done&&(d=f.return)&&d.call(f)}finally{if(b)throw b.error}}return t};Object.defineProperty(a,"__esModule",{value:!0});var x=d(22751),r=d(36225),i=d(63458),o=d(82942),s=b.from(2..toString(16).padStart(2,"0"),"hex"),p=function(e){function a(a,d){void 0===d&&(d={});var c,b,f=this;(f=e.call(this,t(t({},a),{type:2}),d)||this).DEFAULT_HARDFORK="london";var n=a.chainId,r=a.accessList,s=a.maxFeePerGas,p=a.maxPriorityFeePerGas;if(f.common=f._getCommon(d.common,n),f.chainId=f.common.chainIdBN(),!f.common.isActivatedEIP(1559))throw new Error("EIP-1559 not enabled on Common");f.activeCapabilities=f.activeCapabilities.concat([1559,2718,2930]);var l=o.AccessLists.getAccessListData(null!=r?r:[]);if(f.accessList=l.accessList,f.AccessListJSON=l.AccessListJSON,o.AccessLists.verifyAccessList(f.accessList),f.maxFeePerGas=new x.BN((0,x.toBuffer)(""===s?"0x":s)),f.maxPriorityFeePerGas=new x.BN((0,x.toBuffer)(""===p?"0x":p)),f._validateCannotExceedMaxInteger({maxFeePerGas:f.maxFeePerGas,maxPriorityFeePerGas:f.maxPriorityFeePerGas}),f.gasLimit.mul(f.maxFeePerGas).gt(x.MAX_INTEGER)){var u=f._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");throw new Error(u)}if(f.maxFeePerGas.lt(f.maxPriorityFeePerGas)){u=f._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");throw new Error(u)}if(f.v&&!f.v.eqn(0)&&!f.v.eqn(1)){u=f._errorMsg("The y-parity of the transaction should either be 0 or 1");throw new Error(u)}if(f.common.gteHardfork("homestead")&&(null===(c=f.s)||void 0===c?void 0:c.gt(i.N_DIV_2))){u=f._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(u)}return f.common.isActivatedEIP(3860)&&(0,o.checkMaxInitCodeSize)(f.common,f.data.length),(null===(b=null==d?void 0:d.freeze)||void 0===b||b)&&Object.freeze(f),f}return f(a,e),Object.defineProperty(a.prototype,"senderR",{get:function(){return this.r},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"senderS",{get:function(){return this.s},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"yParity",{get:function(){return this.v},enumerable:!1,configurable:!0}),a.fromTxData=function(e,d){return void 0===d&&(d={}),new a(e,d)},a.fromSerializedTx=function(e,d){if(void 0===d&&(d={}),!e.slice(0,1).equals(s))throw new Error("Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ".concat(2,", received: ").concat(e.slice(0,1).toString("hex")));var c=x.rlp.decode(e.slice(1));if(!Array.isArray(c))throw new Error("Invalid serialized tx input: must be array");return a.fromValuesArray(c,d)},a.fromRlpSerializedTx=function(e,d){return void 0===d&&(d={}),a.fromSerializedTx(e,d)},a.fromValuesArray=function(e,d){if(void 0===d&&(d={}),9!==e.length&&12!==e.length)throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");var c=n(e,12),b=c[0],f=c[1],t=c[2],r=c[3],i=c[4],o=c[5],s=c[6],p=c[7],l=c[8],u=c[9],y=c[10],m=c[11];return(0,x.validateNoLeadingZeroes)({nonce:f,maxPriorityFeePerGas:t,maxFeePerGas:r,gasLimit:i,value:s,v:u,r:y,s:m}),new a({chainId:new x.BN(b),nonce:f,maxPriorityFeePerGas:t,maxFeePerGas:r,gasLimit:i,to:o,value:s,data:p,accessList:null!=l?l:[],v:void 0!==u?new x.BN(u):void 0,r:y,s:m},d)},a.prototype.getDataFee=function(){if(this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork())return this.cache.dataFee.value;var a=e.prototype.getDataFee.call(this);return a.iaddn(o.AccessLists.getDataFeeEIP2930(this.accessList,this.common)),Object.isFrozen(this)&&(this.cache.dataFee={value:a,hardfork:this.common.hardfork()}),a},a.prototype.getUpfrontCost=function(e){void 0===e&&(e=new x.BN(0));var a=x.BN.min(this.maxPriorityFeePerGas,this.maxFeePerGas.sub(e)).add(e);return this.gasLimit.mul(a).add(this.value)},a.prototype.raw=function(){return[(0,x.bnToUnpaddedBuffer)(this.chainId),(0,x.bnToUnpaddedBuffer)(this.nonce),(0,x.bnToUnpaddedBuffer)(this.maxPriorityFeePerGas),(0,x.bnToUnpaddedBuffer)(this.maxFeePerGas),(0,x.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:b.from([]),(0,x.bnToUnpaddedBuffer)(this.value),this.data,this.accessList,void 0!==this.v?(0,x.bnToUnpaddedBuffer)(this.v):b.from([]),void 0!==this.r?(0,x.bnToUnpaddedBuffer)(this.r):b.from([]),void 0!==this.s?(0,x.bnToUnpaddedBuffer)(this.s):b.from([])]},a.prototype.serialize=function(){var e=this.raw();return b.concat([s,x.rlp.encode(e)])},a.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var a=this.raw().slice(0,9),d=b.concat([s,x.rlp.encode(a)]);return e?(0,x.keccak256)(d):d},a.prototype.hash=function(){if(!this.isSigned()){var e=this._errorMsg("Cannot call hash method if transaction is not signed");throw new Error(e)}return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,x.keccak256)(this.serialize())),this.cache.hash):(0,x.keccak256)(this.serialize())},a.prototype.getMessageToVerifySignature=function(){return this.getMessageToSign()},a.prototype.getSenderPublicKey=function(){var e;if(!this.isSigned()){var a=this._errorMsg("Cannot call this method if transaction is not signed");throw new Error(a)}var d=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(i.N_DIV_2))){a=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(a)}var c=this,b=c.v,f=c.r,t=c.s;try{return(0,x.ecrecover)(d,b.addn(27),(0,x.bnToUnpaddedBuffer)(f),(0,x.bnToUnpaddedBuffer)(t))}catch(e){a=this._errorMsg("Invalid Signature");throw new Error(a)}},a.prototype._processSignature=function(e,d,c){var b=t(t({},this.txOptions),{common:this.common});return a.fromTxData({chainId:this.chainId,nonce:this.nonce,maxPriorityFeePerGas:this.maxPriorityFeePerGas,maxFeePerGas:this.maxFeePerGas,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,accessList:this.accessList,v:new x.BN(e-27),r:new x.BN(d),s:new x.BN(c)},b)},a.prototype.toJSON=function(){var e=o.AccessLists.getAccessListJSON(this.accessList);return{chainId:(0,x.bnToHex)(this.chainId),nonce:(0,x.bnToHex)(this.nonce),maxPriorityFeePerGas:(0,x.bnToHex)(this.maxPriorityFeePerGas),maxFeePerGas:(0,x.bnToHex)(this.maxFeePerGas),gasLimit:(0,x.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,x.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),accessList:e,v:void 0!==this.v?(0,x.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,x.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,x.bnToHex)(this.s):void 0}},a.prototype.errorStr=function(){var e=this._getSharedErrorPostfix();return e+=" maxFeePerGas=".concat(this.maxFeePerGas," maxPriorityFeePerGas=").concat(this.maxPriorityFeePerGas)},a.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},a}(r.BaseTransaction);a.default=p},29325:function(e,a,d){"use strict";var c,b=d(48764).Buffer,f=this&&this.__extends||(c=function(e,a){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(e[d]=a[d])},c(e,a)},function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function d(){this.constructor=e}c(e,a),e.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}),t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var a,d=1,c=arguments.length;d<c;d++)for(var b in a=arguments[d])Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=a[b]);return e},t.apply(this,arguments)},n=this&&this.__read||function(e,a){var d="function"==typeof Symbol&&e[Symbol.iterator];if(!d)return e;var c,b,f=d.call(e),t=[];try{for(;(void 0===a||a-- >0)&&!(c=f.next()).done;)t.push(c.value)}catch(e){b={error:e}}finally{try{c&&!c.done&&(d=f.return)&&d.call(f)}finally{if(b)throw b.error}}return t};Object.defineProperty(a,"__esModule",{value:!0});var x=d(22751),r=d(36225),i=d(63458),o=d(82942),s=b.from(1..toString(16).padStart(2,"0"),"hex"),p=function(e){function a(a,d){void 0===d&&(d={});var c,b,f=this;(f=e.call(this,t(t({},a),{type:1}),d)||this).DEFAULT_HARDFORK="berlin";var n=a.chainId,r=a.accessList,s=a.gasPrice;if(f.common=f._getCommon(d.common,n),f.chainId=f.common.chainIdBN(),!f.common.isActivatedEIP(2930))throw new Error("EIP-2930 not enabled on Common");f.activeCapabilities=f.activeCapabilities.concat([2718,2930]);var p=o.AccessLists.getAccessListData(null!=r?r:[]);if(f.accessList=p.accessList,f.AccessListJSON=p.AccessListJSON,o.AccessLists.verifyAccessList(f.accessList),f.gasPrice=new x.BN((0,x.toBuffer)(""===s?"0x":s)),f._validateCannotExceedMaxInteger({gasPrice:f.gasPrice}),f.gasPrice.mul(f.gasLimit).gt(x.MAX_INTEGER)){var l=f._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");throw new Error(l)}if(f.v&&!f.v.eqn(0)&&!f.v.eqn(1)){l=f._errorMsg("The y-parity of the transaction should either be 0 or 1");throw new Error(l)}if(f.common.gteHardfork("homestead")&&(null===(c=f.s)||void 0===c?void 0:c.gt(i.N_DIV_2))){l=f._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(l)}return f.common.isActivatedEIP(3860)&&(0,o.checkMaxInitCodeSize)(f.common,f.data.length),(null===(b=null==d?void 0:d.freeze)||void 0===b||b)&&Object.freeze(f),f}return f(a,e),Object.defineProperty(a.prototype,"senderR",{get:function(){return this.r},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"senderS",{get:function(){return this.s},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"yParity",{get:function(){return this.v},enumerable:!1,configurable:!0}),a.fromTxData=function(e,d){return void 0===d&&(d={}),new a(e,d)},a.fromSerializedTx=function(e,d){if(void 0===d&&(d={}),!e.slice(0,1).equals(s))throw new Error("Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ".concat(1,", received: ").concat(e.slice(0,1).toString("hex")));var c=x.rlp.decode(e.slice(1));if(!Array.isArray(c))throw new Error("Invalid serialized tx input: must be array");return a.fromValuesArray(c,d)},a.fromRlpSerializedTx=function(e,d){return void 0===d&&(d={}),a.fromSerializedTx(e,d)},a.fromValuesArray=function(e,d){if(void 0===d&&(d={}),8!==e.length&&11!==e.length)throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");var c=n(e,11),b=c[0],f=c[1],t=c[2],r=c[3],i=c[4],o=c[5],s=c[6],p=c[7],l=c[8],u=c[9],y=c[10];(0,x.validateNoLeadingZeroes)({nonce:f,gasPrice:t,gasLimit:r,value:o,v:l,r:u,s:y});return new a({chainId:new x.BN(b),nonce:f,gasPrice:t,gasLimit:r,to:i,value:o,data:s,accessList:null!=p?p:[],v:void 0!==l?new x.BN(l):void 0,r:u,s:y},d)},a.prototype.getDataFee=function(){if(this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork())return this.cache.dataFee.value;var a=e.prototype.getDataFee.call(this);return a.iaddn(o.AccessLists.getDataFeeEIP2930(this.accessList,this.common)),Object.isFrozen(this)&&(this.cache.dataFee={value:a,hardfork:this.common.hardfork()}),a},a.prototype.getUpfrontCost=function(){return this.gasLimit.mul(this.gasPrice).add(this.value)},a.prototype.raw=function(){return[(0,x.bnToUnpaddedBuffer)(this.chainId),(0,x.bnToUnpaddedBuffer)(this.nonce),(0,x.bnToUnpaddedBuffer)(this.gasPrice),(0,x.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:b.from([]),(0,x.bnToUnpaddedBuffer)(this.value),this.data,this.accessList,void 0!==this.v?(0,x.bnToUnpaddedBuffer)(this.v):b.from([]),void 0!==this.r?(0,x.bnToUnpaddedBuffer)(this.r):b.from([]),void 0!==this.s?(0,x.bnToUnpaddedBuffer)(this.s):b.from([])]},a.prototype.serialize=function(){var e=this.raw();return b.concat([s,x.rlp.encode(e)])},a.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var a=this.raw().slice(0,8),d=b.concat([s,x.rlp.encode(a)]);return e?(0,x.keccak256)(d):d},a.prototype.hash=function(){if(!this.isSigned()){var e=this._errorMsg("Cannot call hash method if transaction is not signed");throw new Error(e)}return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,x.keccak256)(this.serialize())),this.cache.hash):(0,x.keccak256)(this.serialize())},a.prototype.getMessageToVerifySignature=function(){return this.getMessageToSign()},a.prototype.getSenderPublicKey=function(){var e;if(!this.isSigned()){var a=this._errorMsg("Cannot call this method if transaction is not signed");throw new Error(a)}var d=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(i.N_DIV_2))){a=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(a)}var c=this,b=c.yParity,f=c.r,t=c.s;try{return(0,x.ecrecover)(d,b.addn(27),(0,x.bnToUnpaddedBuffer)(f),(0,x.bnToUnpaddedBuffer)(t))}catch(e){a=this._errorMsg("Invalid Signature");throw new Error(a)}},a.prototype._processSignature=function(e,d,c){var b=t(t({},this.txOptions),{common:this.common});return a.fromTxData({chainId:this.chainId,nonce:this.nonce,gasPrice:this.gasPrice,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,accessList:this.accessList,v:new x.BN(e-27),r:new x.BN(d),s:new x.BN(c)},b)},a.prototype.toJSON=function(){var e=o.AccessLists.getAccessListJSON(this.accessList);return{chainId:(0,x.bnToHex)(this.chainId),nonce:(0,x.bnToHex)(this.nonce),gasPrice:(0,x.bnToHex)(this.gasPrice),gasLimit:(0,x.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,x.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),accessList:e,v:void 0!==this.v?(0,x.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,x.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,x.bnToHex)(this.s):void 0}},a.prototype.errorStr=function(){var e,a,d=this._getSharedErrorPostfix();return d+=" gasPrice=".concat(this.gasPrice," accessListCount=").concat(null!==(a=null===(e=this.accessList)||void 0===e?void 0:e.length)&&void 0!==a?a:0)},a.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},a}(r.BaseTransaction);a.default=p},66052:function(e,a,d){"use strict";var c=this&&this.__createBinding||(Object.create?function(e,a,d,c){void 0===c&&(c=d);var b=Object.getOwnPropertyDescriptor(a,d);b&&!("get"in b?!a.__esModule:b.writable||b.configurable)||(b={enumerable:!0,get:function(){return a[d]}}),Object.defineProperty(e,c,b)}:function(e,a,d,c){void 0===c&&(c=d),e[c]=a[d]}),b=this&&this.__exportStar||function(e,a){for(var d in e)"default"===d||Object.prototype.hasOwnProperty.call(a,d)||c(a,e,d)},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.FeeMarketEIP1559Transaction=a.TransactionFactory=a.AccessListEIP2930Transaction=a.Transaction=void 0;var t=d(35534);Object.defineProperty(a,"Transaction",{enumerable:!0,get:function(){return f(t).default}});var n=d(29325);Object.defineProperty(a,"AccessListEIP2930Transaction",{enumerable:!0,get:function(){return f(n).default}});var x=d(31932);Object.defineProperty(a,"TransactionFactory",{enumerable:!0,get:function(){return f(x).default}});var r=d(47669);Object.defineProperty(a,"FeeMarketEIP1559Transaction",{enumerable:!0,get:function(){return f(r).default}}),b(d(63458),a)},35534:function(e,a,d){"use strict";var c,b=d(48764).Buffer,f=this&&this.__extends||(c=function(e,a){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(e[d]=a[d])},c(e,a)},function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function d(){this.constructor=e}c(e,a),e.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}),t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var a,d=1,c=arguments.length;d<c;d++)for(var b in a=arguments[d])Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=a[b]);return e},t.apply(this,arguments)},n=this&&this.__read||function(e,a){var d="function"==typeof Symbol&&e[Symbol.iterator];if(!d)return e;var c,b,f=d.call(e),t=[];try{for(;(void 0===a||a-- >0)&&!(c=f.next()).done;)t.push(c.value)}catch(e){b={error:e}}finally{try{c&&!c.done&&(d=f.return)&&d.call(f)}finally{if(b)throw b.error}}return t};Object.defineProperty(a,"__esModule",{value:!0});var x=d(22751),r=d(63458),i=d(36225),o=d(82942),s=function(e){function a(a,d){void 0===d&&(d={});var c,b=this;if((b=e.call(this,t(t({},a),{type:0}),d)||this).common=b._validateTxV(b.v,d.common),b.gasPrice=new x.BN((0,x.toBuffer)(""===a.gasPrice?"0x":a.gasPrice)),b.gasPrice.mul(b.gasLimit).gt(x.MAX_INTEGER)){var f=b._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");throw new Error(f)}if(b._validateCannotExceedMaxInteger({gasPrice:b.gasPrice}),b.common.gteHardfork("spuriousDragon"))if(b.isSigned()){var n=b.v,i=b.common.chainIdBN().muln(2);(n.eq(i.addn(35))||n.eq(i.addn(36)))&&b.activeCapabilities.push(r.Capability.EIP155ReplayProtection)}else b.activeCapabilities.push(r.Capability.EIP155ReplayProtection);return b.common.isActivatedEIP(3860)&&(0,o.checkMaxInitCodeSize)(b.common,b.data.length),(null===(c=null==d?void 0:d.freeze)||void 0===c||c)&&Object.freeze(b),b}return f(a,e),a.fromTxData=function(e,d){return void 0===d&&(d={}),new a(e,d)},a.fromSerializedTx=function(e,a){void 0===a&&(a={});var d=x.rlp.decode(e);if(!Array.isArray(d))throw new Error("Invalid serialized tx input. Must be array");return this.fromValuesArray(d,a)},a.fromRlpSerializedTx=function(e,d){return void 0===d&&(d={}),a.fromSerializedTx(e,d)},a.fromValuesArray=function(e,d){if(void 0===d&&(d={}),6!==e.length&&9!==e.length)throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");var c=n(e,9),b=c[0],f=c[1],t=c[2],r=c[3],i=c[4],o=c[5],s=c[6],p=c[7],l=c[8];return(0,x.validateNoLeadingZeroes)({nonce:b,gasPrice:f,gasLimit:t,value:i,v:s,r:p,s:l}),new a({nonce:b,gasPrice:f,gasLimit:t,to:r,value:i,data:o,v:s,r:p,s:l},d)},a.prototype.raw=function(){return[(0,x.bnToUnpaddedBuffer)(this.nonce),(0,x.bnToUnpaddedBuffer)(this.gasPrice),(0,x.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:b.from([]),(0,x.bnToUnpaddedBuffer)(this.value),this.data,void 0!==this.v?(0,x.bnToUnpaddedBuffer)(this.v):b.from([]),void 0!==this.r?(0,x.bnToUnpaddedBuffer)(this.r):b.from([]),void 0!==this.s?(0,x.bnToUnpaddedBuffer)(this.s):b.from([])]},a.prototype.serialize=function(){return x.rlp.encode(this.raw())},a.prototype._getMessageToSign=function(){var e=[(0,x.bnToUnpaddedBuffer)(this.nonce),(0,x.bnToUnpaddedBuffer)(this.gasPrice),(0,x.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:b.from([]),(0,x.bnToUnpaddedBuffer)(this.value),this.data];return this.supports(r.Capability.EIP155ReplayProtection)&&(e.push((0,x.toBuffer)(this.common.chainIdBN())),e.push((0,x.unpadBuffer)((0,x.toBuffer)(0))),e.push((0,x.unpadBuffer)((0,x.toBuffer)(0)))),e},a.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var a=this._getMessageToSign();return e?(0,x.rlphash)(a):a},a.prototype.getDataFee=function(){return this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork()?this.cache.dataFee.value:(Object.isFrozen(this)&&(this.cache.dataFee={value:e.prototype.getDataFee.call(this),hardfork:this.common.hardfork()}),e.prototype.getDataFee.call(this))},a.prototype.getUpfrontCost=function(){return this.gasLimit.mul(this.gasPrice).add(this.value)},a.prototype.hash=function(){return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,x.rlphash)(this.raw())),this.cache.hash):(0,x.rlphash)(this.raw())},a.prototype.getMessageToVerifySignature=function(){if(!this.isSigned()){var e=this._errorMsg("This transaction is not signed");throw new Error(e)}var a=this._getMessageToSign();return(0,x.rlphash)(a)},a.prototype.getSenderPublicKey=function(){var e,a=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(r.N_DIV_2))){var d=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(d)}var c=this,b=c.v,f=c.r,t=c.s;try{return(0,x.ecrecover)(a,b,(0,x.bnToUnpaddedBuffer)(f),(0,x.bnToUnpaddedBuffer)(t),this.supports(r.Capability.EIP155ReplayProtection)?this.common.chainIdBN():void 0)}catch(e){d=this._errorMsg("Invalid Signature");throw new Error(d)}},a.prototype._processSignature=function(e,d,c){var b=new x.BN(e);this.supports(r.Capability.EIP155ReplayProtection)&&b.iadd(this.common.chainIdBN().muln(2).addn(8));var f=t(t({},this.txOptions),{common:this.common});return a.fromTxData({nonce:this.nonce,gasPrice:this.gasPrice,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,v:b,r:new x.BN(d),s:new x.BN(c)},f)},a.prototype.toJSON=function(){return{nonce:(0,x.bnToHex)(this.nonce),gasPrice:(0,x.bnToHex)(this.gasPrice),gasLimit:(0,x.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,x.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),v:void 0!==this.v?(0,x.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,x.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,x.bnToHex)(this.s):void 0}},a.prototype._validateTxV=function(e,a){if(void 0!==e&&e.ltn(37)&&!e.eqn(27)&&!e.eqn(28))throw new Error("Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ".concat(e));var d;if(void 0!==e&&(!a||a.gteHardfork("spuriousDragon"))&&!e.eqn(27)&&!e.eqn(28))if(a){var c=a.chainIdBN().muln(2);if(!(e.eq(c.addn(35))||e.eq(c.addn(36))))throw new Error("Incompatible EIP155-based V ".concat(e," and chain id ").concat(a.chainIdBN(),". See the Common parameter of the Transaction constructor to set the chain id."))}else{var b=void 0;b=e.subn(35).isEven()?35:36,d=e.subn(b).divn(2)}return this._getCommon(a,d)},a.prototype._unsignedTxImplementsEIP155=function(){return this.common.gteHardfork("spuriousDragon")},a.prototype._signedTxImplementsEIP155=function(){if(!this.isSigned()){var e=this._errorMsg("This transaction is not signed");throw new Error(e)}var a=this.common.gteHardfork("spuriousDragon"),d=this.v,c=this.common.chainIdBN().muln(2);return(d.eq(c.addn(35))||d.eq(c.addn(36)))&&a},a.prototype.errorStr=function(){var e=this._getSharedErrorPostfix();return e+=" gasPrice=".concat(this.gasPrice)},a.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},a}(i.BaseTransaction);a.default=s},31932:(e,a,d)=>{"use strict";var c=d(48764).Buffer;Object.defineProperty(a,"__esModule",{value:!0});var b=d(22751),f=d(66052),t=function(){function e(){}return e.fromTxData=function(e,a){if(void 0===a&&(a={}),"type"in e&&void 0!==e.type){var d=new b.BN((0,b.toBuffer)(e.type)).toNumber();if(0===d)return f.Transaction.fromTxData(e,a);if(1===d)return f.AccessListEIP2930Transaction.fromTxData(e,a);if(2===d)return f.FeeMarketEIP1559Transaction.fromTxData(e,a);throw new Error("Tx instantiation with type ".concat(d," not supported"))}return f.Transaction.fromTxData(e,a)},e.fromSerializedData=function(e,a){if(void 0===a&&(a={}),e[0]<=127){var d=void 0;switch(e[0]){case 1:d=2930;break;case 2:d=1559;break;default:throw new Error("TypedTransaction with ID ".concat(e[0]," unknown"))}return 1559===d?f.FeeMarketEIP1559Transaction.fromSerializedTx(e,a):f.AccessListEIP2930Transaction.fromSerializedTx(e,a)}return f.Transaction.fromSerializedTx(e,a)},e.fromBlockBodyData=function(e,a){if(void 0===a&&(a={}),c.isBuffer(e))return this.fromSerializedData(e,a);if(Array.isArray(e))return f.Transaction.fromValuesArray(e,a);throw new Error("Cannot decode transaction: unknown type input")},e.getTransactionClass=function(e,a){if(void 0===e&&(e=0),0==e||e>=128&&e<=255)return f.Transaction;switch(e){case 1:return f.AccessListEIP2930Transaction;case 2:return f.FeeMarketEIP1559Transaction;default:throw new Error("TypedTransaction with ID ".concat(e," unknown"))}},e}();a.default=t},63458:(e,a,d)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.N_DIV_2=a.isAccessList=a.isAccessListBuffer=a.Capability=void 0;var c=d(22751);function b(e){if(0===e.length)return!0;var a=e[0];return!!Array.isArray(a)}!function(e){e[e.EIP155ReplayProtection=155]="EIP155ReplayProtection",e[e.EIP1559FeeMarket=1559]="EIP1559FeeMarket",e[e.EIP2718TypedTransaction=2718]="EIP2718TypedTransaction",e[e.EIP2930AccessLists=2930]="EIP2930AccessLists"}(a.Capability||(a.Capability={})),a.isAccessListBuffer=b,a.isAccessList=function(e){return!b(e)},a.N_DIV_2=new c.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16)},82942:(e,a,d)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.AccessLists=a.checkMaxInitCodeSize=void 0;var c=d(22751),b=d(63458);a.checkMaxInitCodeSize=function(e,a){if(a>e.param("vm","maxInitCodeSize"))throw new Error("the initcode size of this transaction is too large: it is ".concat(a," while the max is ").concat(e.param("vm","maxInitCodeSize")))};var f=function(){function e(){}return e.getAccessListData=function(e){var a,d;if(e&&(0,b.isAccessList)(e)){a=e;for(var f=[],t=0;t<e.length;t++){for(var n=e[t],x=(0,c.toBuffer)(n.address),r=[],i=0;i<n.storageKeys.length;i++)r.push((0,c.toBuffer)(n.storageKeys[i]));f.push([x,r])}d=f}else{d=null!=e?e:[];var o=[];for(t=0;t<d.length;t++){var s=d[t],p=(0,c.bufferToHex)(s[0]),l=[];for(n=0;n<s[1].length;n++)l.push((0,c.bufferToHex)(s[1][n]));var u={address:p,storageKeys:l};o.push(u)}a=o}return{AccessListJSON:a,accessList:d}},e.verifyAccessList=function(e){for(var a=0;a<e.length;a++){var d=e[a],c=d[0],b=d[1];if(void 0!==d[2])throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");if(20!=c.length)throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");for(var f=0;f<b.length;f++)if(32!=b[f].length)throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes")}},e.getAccessListJSON=function(e){for(var a=[],d=0;d<e.length;d++){for(var b=e[d],f={address:"0x"+(0,c.setLengthLeft)(b[0],20).toString("hex"),storageKeys:[]},t=b[1],n=0;n<t.length;n++){var x=t[n];f.storageKeys.push("0x"+(0,c.setLengthLeft)(x,32).toString("hex"))}a.push(f)}return a},e.getDataFeeEIP2930=function(e,a){for(var d=a.param("gasPrices","accessListStorageKeyCost"),c=a.param("gasPrices","accessListAddressCost"),b=0,f=0;f<e.length;f++){b+=e[f][1].length}return e.length*c+b*d},e}();a.AccessLists=f},23667:(e,a,d)=>{"use strict";a.V=a.zj=a.UJ=a.n3=a.Ti=a.oU=a.UY=a.RQ=a.z2=void 0;var c=d(29877);Object.defineProperty(a,"z2",{enumerable:!0,get:function(){return c.ExSchemaName}}),Object.defineProperty(a,"RQ",{enumerable:!0,get:function(){return c.MakeOrderType}}),Object.defineProperty(a,"UY",{enumerable:!0,get:function(){return c.ElementSchemaName}}),Object.defineProperty(a,"oU",{enumerable:!0,get:function(){return c.OrderSide}});var b=d(71096);Object.defineProperty(a,"Ti",{enumerable:!0,get:function(){return b.ElementSDK}});var f=d(81590);var t=d(980);Object.defineProperty(a,"n3",{enumerable:!0,get:function(){return t.getUserBalance}});var n=d(37312);Object.defineProperty(a,"UJ",{enumerable:!0,get:function(){return n.isAddress}});var x=d(22758);var r=d(85222);Object.defineProperty(a,"zj",{enumerable:!0,get:function(){return r.getOfferFees}});var i=d(71263);var o=d(52638);Object.defineProperty(a,"V",{enumerable:!0,get:function(){return o.ErrorCode_NoOrderFilled}})},42096:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.OPENSEA_PROXY_API_CONFIG=a.API_KEY=void 0,a.API_KEY={main:{api:"https://api.element.market",key:"zQbYj7RhC1VHIBdWU63ki5AJKXloamDT",secret:"UqCMpfGn3VyQEdsjLkzJv9tNlgbKFD7O"},test:{api:"https://api-test.element.market",key:"ysBokbA3gKUzt61DmeHWjTFYZ07CGPQL",secret:"a2PAJXRBChdpGvoyKEz3lLS5Yf1bM0NO"}},a.OPENSEA_PROXY_API_CONFIG={apiBaseUrl:"https://api.element.market/bridge/opensea"}},31169:(e,a,d)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.AuthApi=void 0;const c=d(89173),b=d(28687),f=d(54941);a.AuthApi=class{constructor(e,a){this.wallet=e;const d=a.timeout||1e4,c={"X-Api-Key":a.apiKey,"X-Api-Sign":a.apiSign,"X-Viewer-Addr":(0,f.getAccountAddress)(e),"X-Viewer-Chainmid":(0,f.getChainMId)(e.chainId).toString()};this.gqlClient=new b.GraphQLClient(a.url,{timeout:d,headers:c}),this.chain={chain:f.CHAIN[e.chainId],chainId:"0x"+e.chainId.toString(16)}}async getSignInToken({message:e,signature:a,realm:d,source:b}){const t={identity:{address:(0,f.getAccountAddress)(this.wallet),blockChain:this.chain},message:e,signature:a,realm:d,source:b},n=await this.gqlClient.request(c.loginAuth,t);if(!n.auth.login.token)throw new Error("loginAuth error");return n.auth.login.token}async getLoginMessage(){const e=(0,f.getAccountAddress)(this.wallet),a=Object.assign({address:e},this.chain);return`Welcome to Element!\n   \nClick "Sign" to sign in. No password needed!\n   \nI accept the Element Terms of Service: \n https://element.market/tos\n   \nWallet address:\n${e}\n   \nNonce:\n${(await this.gqlClient.request(c.getNonce,a)).user.nonce}`}}},89173:(e,a,d)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.accountAssets=a.accountOrders=a.userAssetsList=a.loginAuth=a.getNonce=void 0;const c=d(28687);a.getNonce=c.gql`
    query GetNonce($address: Address!, $chain: Chain!, $chainId: ChainId!) {
        user(identity: { address: $address, blockChain: { chain: $chain, chainId: $chainId } }) {
            nonce
        }
    }
`,a.loginAuth=c.gql`
  mutation LoginAuth($identity: IdentityInput!, $message: String!, $signature: String!, $realm: String, $source: String) {
    auth {
      login(input: { identity: $identity, message: $message, signature: $signature, realm: $realm, source: $source }) {
        token
      }
    }
  }
`,a.userAssetsList=c.gql`
    query UserAssetsList($before: String, $after: String, $first: Int, $last: Int, $identity: IdentityInput!) {
        accountAssets(before: $before, after: $after, first: $first, last: $last, identity: $identity) {
            totalCount
            edges {
                cursor
                node {
                    asset {
                        chain
                        chainId
                        contractAddress
                        tokenId
                        tokenType
                        imagePreviewUrl
                        imageThumbnailUrl
                        name
                        animationUrl
                        tradeSummary {
                            lastSale {
                                lastSalePrice
                                lastSaleToken
                                lastSaleQuantity
                                lastSaleTokenContract {
                                    id
                                    name
                                    address
                                    icon
                                    accuracy
                                }
                            }
                            bestBid {
                                bestBidToken
                                bestBidPrice
                                bestBidOrderQuantity
                                bestBidTokenContract {
                                    id
                                    name
                                    address
                                    icon
                                    accuracy
                                }
                            }
                            bestAsk {
                                bestAskToken
                                bestAskPrice
                                bestAskExpirationDate
                                bestAskOrderType
                                bestAskOrderQuantity
                                bestAskTokenContract {
                                    id
                                    name
                                    address
                                    icon
                                    accuracy
                                }
                            }
                        }
                        ownedQuantity
                        collection {
                            name
                            isVerified
                            paymentTokens {
                                name
                                address
                                decimal
                            }
                            royalty
                            royaltyAddress
                        }
                    }
                }
            }
            pageInfo {
                endCursor
                hasPreviousPage
                hasNextPage
                startCursor
            }
        }
    }
`,a.accountOrders=c.gql`
    query AccountOrders(
        $before: String
        $after: String
        $first: Int
        $last: Int
        $identity: IdentityInput!
        $orderType: Int
    ) {
        accountOrders(
            before: $before
            after: $after
            first: $first
            last: $last
            identity: $identity
            orderType: $orderType
        ) {
            totalCount
            edges {
                cursor
                node {
                    id
                    chain
                    chainId
                    createdDate
                    closingDate
                    expirationTime
                    listingTime
                    orderHash
                    metadata {
                        asset {
                            id
                            address
                            quantity
                            data
                        }
                        schema
                    }
                    exchange
                    maker
                    taker
                    makerRelayerFee
                    takerRelayerFee
                    makerProtocolFee
                    takerProtocolFee
                    feeRecipient
                    feeMethod
                    side
                    standard
                    saleKind
                    target
                    howToCall
                    dataToCall
                    replacementPattern
                    staticTarget
                    staticExtradata
                    paymentToken
                    basePrice
                    englishAuctionReservePrice
                    extra
                    quantity
                    salt
                    v
                    r
                    s
                    approvedOnChain
                    cancelled
                    finalized
                    markedInvalid
                    priceBase
                    priceCNY
                    priceUSD
                    price
                    makerAccount {
                        identity {
                            address
                            blockChain {
                                chain
                                chainId
                            }
                        }
                        user {
                            address
                            profileImageUrl
                            userName
                        }
                        info {
                            profileImageUrl
                            userName
                        }
                    }
                    takerAccount {
                        identity {
                            address
                            blockChain {
                                chain
                                chainId
                            }
                        }
                        user {
                            address
                            profileImageUrl
                            userName
                        }
                        info {
                            profileImageUrl
                            userName
                        }
                    }
                    asset {
                        imagePreviewUrl
                        name
                        chain
                        chainId
                        contractAddress
                        tokenId
                    }
                    paymentTokenContract {
                        accuracy
                        icon
                    }
                }
            }
            pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
            }
        }
    }
`,a.accountAssets=c.gql`
    query accountAssets(
        $before: String
        $after: String
        $first: Int
        $last: Int
        $identity: IdentityInput!
        $orderType: Int
    ) {
        accountOrders(
            before: $before
            after: $after
            first: $first
            last: $last
            identity: $identity
            orderType: $orderType
        ) {
            totalCount
            edges {
                cursor
                node {
                    id
                    chain
                    chainId
                    createdDate
                    closingDate
                    expirationTime
                    listingTime
                    orderHash
                    metadata {
                        asset {
                            id
                            address
                            quantity
                            data
                        }
                        schema
                    }
                    exchange
                    maker
                    taker
                    makerRelayerFee
                    takerRelayerFee
                    makerProtocolFee
                    takerProtocolFee
                    feeRecipient
                    feeMethod
                    side
                    standard
                    saleKind
                    target
                    howToCall
                    dataToCall
                    replacementPattern
                    staticTarget
                    staticExtradata
                    paymentToken
                    basePrice
                    englishAuctionReservePrice
                    extra
                    quantity
                    salt
                    v
                    r
                    s
                    approvedOnChain
                    cancelled
                    finalized
                    markedInvalid
                    priceBase
                    priceCNY
                    priceUSD
                    price
                    makerAccount {
                        identity {
                            address
                            blockChain {
                                chain
                                chainId
                            }
                        }
                        user {
                            address
                            profileImageUrl
                            userName
                        }
                        info {
                            profileImageUrl
                            userName
                        }
                    }
                    takerAccount {
                        identity {
                            address
                            blockChain {
                                chain
                                chainId
                            }
                        }
                        user {
                            address
                            profileImageUrl
                            userName
                        }
                        info {
                            profileImageUrl
                            userName
                        }
                    }
                    asset {
                        imagePreviewUrl
                        name
                        chain
                        chainId
                        contractAddress
                        tokenId
                    }
                    paymentTokenContract {
                        accuracy
                        icon
                    }
                }
            }
            pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
            }
        }
    }