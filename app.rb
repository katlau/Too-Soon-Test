require 'sinatra'

get '/' do
  File.open('public/index.html', File::RDONLY)
end