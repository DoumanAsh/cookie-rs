var N=null,E="",T="t",U="u",searchIndex={};
var R=["cookie","cookiebuilder","parseerror","http_only","option","secure","same_site","samesite","max_age","duration","to_owned","clone_into","try_from","borrow_mut","try_into","result","type_id","into_iter","borrow","typeid","to_string","cookiejar","formatter","ParseError","SameSite","CookieBuilder","CookieJar"];

searchIndex[R[0]]={"doc":"HTTP cookie parsing and cookie jar management.","i":[[3,R[25],R[0],"Structure that follows the builder pattern for building…",N,N],[3,R[26],E,"A collection of cookies that tracks its modifications.",N,N],[3,"Delta",E,"Iterator over the changes to a cookie jar.",N,N],[3,"Iter",E,"Iterator over all of the cookies in a jar.",N,N],[3,"Cookie",E,"Representation of an HTTP cookie.",N,N],[4,R[23],E,"Enum corresponding to a parsing error.",N,N],[13,"MissingPair",E,"The cookie did not contain a name/value pair.",0,N],[13,"EmptyName",E,"The cookie's name was empty.",0,N],[13,"Utf8Error",E,"Decoding the cookie's name or value resulted in invalid…",0,N],[4,R[24],E,"The `SameSite` cookie attribute.",N,N],[13,"Strict",E,"The \"Strict\" `SameSite` attribute.",1,N],[13,"Lax",E,"The \"Lax\" `SameSite` attribute.",1,N],[13,"None",E,"No `SameSite` attribute.",1,N],[11,"new",E,"Creates a new `CookieBuilder` instance from the given name…",2,[[["v"],["n"]],[R[1]]]],[11,"expires",E,"Sets the `expires` field in the cookie being built.",2,[[["tm"]],[R[1]]]],[11,R[8],E,"Sets the `max_age` field in the cookie being built.",2,[[[R[9]]],[R[1]]]],[11,"domain",E,"Sets the `domain` field in the cookie being built.",2,[[["cow",["str"]],["into",["cow"]]],[R[1]]]],[11,"path",E,"Sets the `path` field in the cookie being built.",2,[[["cow",["str"]],["into",["cow"]]],[R[1]]]],[11,R[5],E,"Sets the `secure` field in the cookie being built.",2,[[["bool"]],[R[1]]]],[11,R[3],E,"Sets the `http_only` field in the cookie being built.",2,[[["bool"]],[R[1]]]],[11,R[6],E,"Sets the `same_site` field in the cookie being built.",2,[[[R[7]]],[R[1]]]],[11,"permanent",E,"Makes the cookie being built 'permanent' by extending its…",2,[[],[R[1]]]],[11,"finish",E,"Finishes building and returns the built `Cookie`.",2,[[],[R[0]]]],[11,"as_str",E,"Returns a description of this error as a string",0,[[["self"]],["str"]]],[11,"new",E,"Creates an empty cookie jar.",3,[[],[R[21]]]],[11,"get",E,"Returns a reference to the `Cookie` inside this jar with…",3,[[["str"],["self"]],[[R[4],[R[0]]],[R[0]]]]],[11,"add_original",E,"Adds an \"original\" `cookie` to this jar. If an original…",3,[[["self"],[R[0]]]]],[11,"add",E,"Adds `cookie` to this jar. If a cookie with the same name…",3,[[["self"],[R[0]]]]],[11,"remove",E,"Removes `cookie` from this jar. If an original cookie with…",3,[[["self"],[R[0]]]]],[11,"force_remove",E,"Removes `cookie` from this jar completely. This method…",3,[[["self"],[R[0]]]]],[11,"clear",E,"Removes all cookies from this cookie jar.",3,[[["self"]]]],[11,"delta",E,"Returns an iterator over cookies that represent the…",3,[[["self"]],["delta"]]],[11,"iter",E,"Returns an iterator over all of the cookies present in…",3,[[["self"]],["iter"]]],[11,"is_strict",E,"Returns `true` if `self` is `SameSite::Strict` and `false`…",1,[[["self"]],["bool"]]],[11,"is_lax",E,"Returns `true` if `self` is `SameSite::Lax` and `false`…",1,[[["self"]],["bool"]]],[11,"is_none",E,"Returns `true` if `self` is `SameSite::None` and `false`…",1,[[["self"]],["bool"]]],[11,"new",E,"Creates a new `Cookie` with the given name and value.",4,[[["v"],["n"]],[R[0]]]],[11,"named",E,"Creates a new `Cookie` with the given name and an empty…",4,[[["n"]],[R[0]]]],[11,"build",E,"Creates a new `CookieBuilder` instance from the given key…",4,[[["v"],["n"]],[R[1]]]],[11,"parse",E,"Parses a `Cookie` from the given HTTP cookie header value…",4,[[["s"]],[[R[0]],[R[15],[R[0],R[2]]],[R[2]]]]],[11,"into_owned",E,"Converts `self` into a `Cookie` with a static lifetime.…",4,[[],[R[0]]]],[11,"name",E,"Returns the name of `self`.",4,[[["self"]],["str"]]],[11,"value",E,"Returns the value of `self`.",4,[[["self"]],["str"]]],[11,"name_value",E,"Returns the name and value of `self` as a tuple of `(name,…",4,[[["self"]]]],[11,R[3],E,"Returns whether this cookie was marked `HttpOnly` or not.…",4,[[["self"]],[[R[4],["bool"]],["bool"]]]],[11,R[5],E,"Returns whether this cookie was marked `Secure` or not.…",4,[[["self"]],[[R[4],["bool"]],["bool"]]]],[11,R[6],E,"Returns the `SameSite` attribute of this cookie if one was…",4,[[["self"]],[[R[4],[R[7]]],[R[7]]]]],[11,R[8],E,"Returns the specified max-age of the cookie if one was…",4,[[["self"]],[[R[9]],[R[4],[R[9]]]]]],[11,"path",E,"Returns the `Path` of the cookie if one was specified.",4,[[["self"]],[["str"],[R[4],["str"]]]]],[11,"domain",E,"Returns the `Domain` of the cookie if one was specified.",4,[[["self"]],[["str"],[R[4],["str"]]]]],[11,"expires",E,"Returns the `Expires` time of the cookie if one was…",4,[[["self"]],[["tm"],[R[4],["tm"]]]]],[11,"set_name",E,"Sets the name of `self` to `name`.",4,[[["self"],["cow",["str"]],["into",["cow"]]]]],[11,"set_value",E,"Sets the value of `self` to `value`.",4,[[["self"],["cow",["str"]],["into",["cow"]]]]],[11,"set_http_only",E,"Sets the value of `http_only` in `self` to `value`.",4,[[["self"],["bool"]]]],[11,"set_secure",E,"Sets the value of `secure` in `self` to `value`.",4,[[["self"],["bool"]]]],[11,"set_same_site",E,"Sets the value of `same_site` in `self` to `value`.",4,[[["self"],[R[7]]]]],[11,"set_max_age",E,"Sets the value of `max_age` in `self` to `value`.",4,[[[R[9]],["self"]]]],[11,"set_path",E,"Sets the `path` of `self` to `path`.",4,[[["self"],["cow",["str"]],["into",["cow"]]]]],[11,"set_domain",E,"Sets the `domain` of `self` to `domain`.",4,[[["self"],["cow",["str"]],["into",["cow"]]]]],[11,"set_expires",E,"Sets the expires field of `self` to `time`.",4,[[["self"],["tm"]]]],[11,"make_permanent",E,"Makes `self` a \"permanent\" cookie by extending its…",4,[[["self"]]]],[11,"name_raw",E,"Returns the name of `self` as a string slice of the raw…",4,[[["self"]],[[R[4],["str"]],["str"]]]],[11,"value_raw",E,"Returns the value of `self` as a string slice of the raw…",4,[[["self"]],[[R[4],["str"]],["str"]]]],[11,"path_raw",E,"Returns the `Path` of `self` as a string slice of the raw…",4,[[["self"]],[[R[4],["str"]],["str"]]]],[11,"domain_raw",E,"Returns the `Domain` of `self` as a string slice of the…",4,[[["self"]],[[R[4],["str"]],["str"]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[10],E,E,2,[[["self"]],[T]]],[11,R[11],E,E,2,[[[T],["self"]]]],[11,R[12],E,E,2,[[[U]],[R[15]]]],[11,R[18],E,E,2,[[["self"]],[T]]],[11,R[13],E,E,2,[[["self"]],[T]]],[11,R[14],E,E,2,[[],[R[15]]]],[11,R[16],E,E,2,[[["self"]],[R[19]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[10],E,E,3,[[["self"]],[T]]],[11,R[11],E,E,3,[[[T],["self"]]]],[11,R[12],E,E,3,[[[U]],[R[15]]]],[11,R[18],E,E,3,[[["self"]],[T]]],[11,R[13],E,E,3,[[["self"]],[T]]],[11,R[14],E,E,3,[[],[R[15]]]],[11,R[16],E,E,3,[[["self"]],[R[19]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[17],E,E,5,[[],["i"]]],[11,"into",E,E,5,[[],[U]]],[11,R[12],E,E,5,[[[U]],[R[15]]]],[11,R[18],E,E,5,[[["self"]],[T]]],[11,R[13],E,E,5,[[["self"]],[T]]],[11,R[14],E,E,5,[[],[R[15]]]],[11,R[16],E,E,5,[[["self"]],[R[19]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[17],E,E,6,[[],["i"]]],[11,"into",E,E,6,[[],[U]]],[11,R[12],E,E,6,[[[U]],[R[15]]]],[11,R[18],E,E,6,[[["self"]],[T]]],[11,R[13],E,E,6,[[["self"]],[T]]],[11,R[14],E,E,6,[[],[R[15]]]],[11,R[16],E,E,6,[[["self"]],[R[19]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[20],E,E,4,[[["self"]],["string"]]],[11,"into",E,E,4,[[],[U]]],[11,R[10],E,E,4,[[["self"]],[T]]],[11,R[11],E,E,4,[[[T],["self"]]]],[11,R[12],E,E,4,[[[U]],[R[15]]]],[11,R[18],E,E,4,[[["self"]],[T]]],[11,R[13],E,E,4,[[["self"]],[T]]],[11,R[14],E,E,4,[[],[R[15]]]],[11,R[16],E,E,4,[[["self"]],[R[19]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[20],E,E,0,[[["self"]],["string"]]],[11,"into",E,E,0,[[],[U]]],[11,R[10],E,E,0,[[["self"]],[T]]],[11,R[11],E,E,0,[[[T],["self"]]]],[11,R[12],E,E,0,[[[U]],[R[15]]]],[11,R[18],E,E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[["self"]],[T]]],[11,R[14],E,E,0,[[],[R[15]]]],[11,R[16],E,E,0,[[["self"]],[R[19]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[20],E,E,1,[[["self"]],["string"]]],[11,"into",E,E,1,[[],[U]]],[11,R[10],E,E,1,[[["self"]],[T]]],[11,R[11],E,E,1,[[[T],["self"]]]],[11,R[12],E,E,1,[[[U]],[R[15]]]],[11,R[18],E,E,1,[[["self"]],[T]]],[11,R[13],E,E,1,[[["self"]],[T]]],[11,R[14],E,E,1,[[],[R[15]]]],[11,R[16],E,E,1,[[["self"]],[R[19]]]],[11,"eq",E,E,0,[[[R[2]],["self"]],["bool"]]],[11,"ne",E,E,0,[[[R[2]],["self"]],["bool"]]],[11,"eq",E,E,1,[[[R[7]],["self"]],["bool"]]],[11,"eq",E,E,4,[[["self"],[R[0]]],["bool"]]],[11,"default",E,E,3,[[],[R[21]]]],[11,"from",E,E,0,[[["utf8error"]],[R[2]]]],[11,"clone",E,E,2,[[["self"]],[R[1]]]],[11,"clone",E,E,0,[[["self"]],[R[2]]]],[11,"clone",E,E,3,[[["self"]],[R[21]]]],[11,"clone",E,E,1,[[["self"]],[R[7]]]],[11,"clone",E,E,4,[[["self"]],[R[0]]]],[11,"next",E,E,5,[[["self"]],[[R[0]],[R[4],[R[0]]]]]],[11,"next",E,E,6,[[["self"]],[[R[0]],[R[4],[R[0]]]]]],[11,"fmt",E,E,0,[[[R[22]],["self"]],[R[15]]]],[11,"fmt",E,E,1,[[[R[22]],["self"]],[R[15]]]],[11,"fmt",E,"Formats the cookie `self` as a `Set-Cookie` header value.",4,[[[R[22]],["self"]],[R[15]]]],[11,"fmt",E,E,2,[[[R[22]],["self"]],[R[15]]]],[11,"fmt",E,E,0,[[[R[22]],["self"]],[R[15]]]],[11,"fmt",E,E,3,[[[R[22]],["self"]],[R[15]]]],[11,"fmt",E,E,1,[[[R[22]],["self"]],[R[15]]]],[11,"fmt",E,E,4,[[[R[22]],["self"]],[R[15]]]],[11,"hash",E,E,1,[[["self"],["__h"]]]],[11,"from_str",E,E,4,[[["str"]],[[R[15],[R[0],R[2]]],[R[0]],[R[2]]]]],[11,"description",E,E,0,[[["self"]],["str"]]]],"p":[[4,R[23]],[4,R[24]],[3,R[25]],[3,R[26]],[3,"Cookie"],[3,"Delta"],[3,"Iter"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);