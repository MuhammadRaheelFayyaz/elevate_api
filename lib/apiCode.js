const node = (rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute) => {
  return `
import axios from 'axios';

const options = {
  method: 'GET',
  url: '${selectedRoute}',
  params: {all: '${allDropdownOption}'},
  headers: {
    'X-RapidAPI-Key': ${xrapidApiKeyOption},
    'X-RapidAPI-Host': '${xrapidApiHostOption}'
  }
};

try {
  const response = await axios.request(options);
} catch (error) {
  console.error(error);
} 
`;
};

const c = (rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute) => {
  return `
  CURL *hnd = curl_easy_init();
  
  curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");
  curl_easy_setopt(hnd, CURLOPT_URL, "${selectedRoute}?all=${allDropdownOption}");

  struct curl_slist *headers = NULL;
  headers = curl_slist_append(headers, "X-RapidAPI-Key: ${xrapidApiKeyOption}");
  headers = curl_slist_append(headers, "X-RapidAPI-Host: ${xrapidApiHostOption}");
  curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

  CURLcode ret = curl_easy_perform(hnd);`
}

const clojure=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  (require '[clj-http.client :as client])

  (client/get "${selectedRoute}" {:headers {:X-RapidAPI-Key "${xrapidApiKeyOption}"
                                                               :X-RapidAPI-Host "${xrapidApiHostOption}"}
                                                     :query-params {:all "${allDropdownOption}"}})`
}
const CSharp=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  var client = new RestClient("${selectedRoute}?all=${allDropdownOption}");
  var request = new RestRequest(Method.GET);
  request.AddHeader("X-RapidAPI-Key", "${xrapidApiKeyOption}");
  request.AddHeader("X-RapidAPI-Host", "odds.p.rapidapi.com");
  IRestResponse response = client.Execute(request);`
}
const http=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  var client = new RestClient("${selectedRoute}?all=${allDropdownOption}");
  var request = new RestRequest(Method.GET);
  request.AddHeader("X-RapidAPI-Key", "${xrapidApiKeyOption}");
  request.AddHeader("X-RapidAPI-Host", "${xrapidApiHostOption}");
  IRestResponse response = client.Execute(request);`
}
const java=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  AsyncHttpClient client = new DefaultAsyncHttpClient();
  client.prepare("GET", "${selectedRoute}?all=${allDropdownOption}")
  .setHeader("X-RapidAPI-Key", "${xrapidApiKeyOption}");)
  .setHeader("X-RapidAPI-Host", "${xrapidApiHostOption}")
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

  client.close();`
}
const javascript=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  import axios from 'axios';

  const options = {
    method: 'GET',
    url: '${selectedRoute}',
    params: {all: '${allDropdownOption}'},
    headers: {
      'X-RapidAPI-Key': '${xrapidApiKeyOption}',
      'X-RapidAPI-Host': '${xrapidApiHostOption}'
    }
  };

  try {
    const response = await axios.request(options);
  } catch (error) {
    console.error(error);
  } 
`
}
const kotlin=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  val client = OkHttpClient()
  val request = Request.Builder()
  .url("${selectedRoute}?all=${allDropdownOption}")
  .get()
  .addHeader("X-RapidAPI-Key", "${xrapidApiKeyOption}")
  .addHeader("X-RapidAPI-Host", "${xrapidApiHostOption}")
  .build()

  val response = client.newCall(request).execute()`
}
const objectiveC=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
    #import <Foundation/Foundation.h>

    NSDictionary *headers = @{ @"X-RapidAPI-Key": @"${xrapidApiKeyOption}",
                           @"X-RapidAPI-Host": @"${xrapidApiHostOption}" };

    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"${selectedRoute}?all=${allDropdownOption}"]
                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy
                                                   timeoutInterval:10.0];
    [request setHTTPMethod:@"GET"];
    [request setAllHTTPHeaderFields:headers];

    NSURLSession *session = [NSURLSession sharedSession];
    NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                                            if (error) {
                                            NSLog(@"%@", error);
                                            } else {
                                            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
                                            NSLog(@"%@", httpResponse);
                                            }
                                            }];
    [dataTask resume];`
}

const oCaml=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return`
  open Cohttp_lwt_unix
  open Cohttp
  open Lwt

  let uri = Uri.of_string "${selectedRoute}?all=${allDropdownOption}" in
  let headers = Header.add_list (Header.init ()) [
  ("X-RapidAPI-Key", "${xrapidApiKeyOption}");
  ("X-RapidAPI-Host", "${xrapidApiHostOption}");
  ] in

  Client.call ~headers GET uri
  >>= fun (res, body_stream) ->
  (* Do stuff with the result *)`
}
const php=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return`
  <?php

  $client = new \\GuzzleHttp\\Client();

  $response = $client->request('GET', '${selectedRoute}?all=${allDropdownOption}', [
  'headers' => [
  'X-RapidAPI-Host' => '${xrapidApiHostOption}',
  'X-RapidAPI-Key' => '${xrapidApiKeyOption}',
  ],
  ]);

  echo $response->getBody();
  `
}
const powerShell=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return`
  $headers=@{}
  $headers.Add("X-RapidAPI-Key", "${xrapidApiKeyOption}")
  $headers.Add("X-RapidAPI-Host", "${xrapidApiHostOption}")
  $response = Invoke-RestMethod -Uri '${selectedRoute}?all=${allDropdownOption}' -Method GET -Headers $headers
  `
}
const python=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  import http.client

  conn = http.client.HTTPSConnection("odds.p.rapidapi.com")

  headers = {
    'X-RapidAPI-Key': "${xrapidApiKeyOption}",
    'X-RapidAPI-Host': "${xrapidApiHostOption}"
  }

  conn.request("GET", "/v4/sports?all=${allDropdownOption}", headers=headers)

  res = conn.getresponse()
  data = res.read()

  print(data.decode("utf-8"))`
}
const R=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  library(httr)

  url <- "${selectedRoute}"

  queryString <- list(all = "${allDropdownOption}")

  response <- VERB("GET", url, query = queryString, add_headers('X-RapidAPI-Key' = '${xrapidApiKeyOption}', 'X-RapidAPI-Host' = 'odds.p.rapidapi.com'), content_type("application/octet-stream"))

  content(response, "text")`
}
const rapidQl=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  const RapidQL = require('RapidQL');
  let rql = new RapidQL({
  });

  rql.query({
    Http.get(
      url:"${selectedRoute}?all=${allDropdownOption}"
      headers : {
      "X-RapidAPI-Key":"${xrapidApiKeyOption}",
      "X-RapidAPI-Host":"${xrapidApiHostOption}"
    }
    body : undefined
  ) {

  }
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  `
}

const ruby=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  require 'uri'
  require 'net/http'

  url = URI("${selectedRoute}?all=${allDropdownOption}")

  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = ${allDropdownOption}

  request = Net::HTTP::Get.new(url)
  request["X-RapidAPI-Key"] = '${xrapidApiKeyOption}'
  request["X-RapidAPI-Host"] = '${xrapidApiHostOption}'

  response = http.request(request)
  puts response.read_body`
}
const shell=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return`
  curl --request GET \
  --url '${selectedRoute}?all=${allDropdownOption}' \
  --header 'X-RapidAPI-Host: odds.p.rapidapi.com' \
  --header 'X-RapidAPI-Key: ${xrapidApiKeyOption}'
  `
}

const swift=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
  import Foundation

  let headers = [
    "X-RapidAPI-Key": "${xrapidApiKeyOption}",
    "X-RapidAPI-Host": "${xrapidApiHostOption}"
  ]

  let request = NSMutableURLRequest(url: NSURL(string: "${selectedRoute}?all=${allDropdownOption}")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
  request.httpMethod = "GET"
  request.allHTTPHeaderFields = headers

  let session = URLSession.shared
  let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
  let httpResponse = response as? HTTPURLResponse
  print(httpResponse)
}
})

  dataTask.resume()`
}
const Go=(rapidApiOption,requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute)=>{
  return `
package main
import (
 "fmt"
 "net/http"
  "io"  
  )

func main() {

url := "${selectedRoute}?all=${allDropdownOption}"

req, _ := http.NewRequest("GET", url, nil)

req.Header.Add("X-RapidAPI-Key", "${xrapidApiKeyOption}")
req.Header.Add("X-RapidAPI-Host", "${xrapidApiHostOption}")

res, _ := http.DefaultClient.Do(req)

defer res.Body.Close()
body, _ := io.ReadAll(res.Body)

fmt.Println(res)
fmt.Println(string(body))

}
  `
}
export default {
  "Node.js": node,
  "C":c,
  "Clojure":clojure,
  "C#":CSharp,
  "HTTP":http,
  "Java":java,
  'JavaScript':javascript,
  'Kotlin':kotlin,
  "Objective-C":objectiveC,
  "OCaml":oCaml,
  "PHP":php,
  "PowerShell":powerShell,
  "Python":python,
  "R":R,
  "RapidQl":rapidQl,
  "Ruby":ruby,
  "Shell":shell,
  'swift':swift,
  'Go':Go
};
