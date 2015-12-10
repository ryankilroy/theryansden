require 'sinatra'
require 'yaml/store'

get '/' do
	@title = "Welcome to The Ryan's Den"
	erb :index
end

get '/chat/login' do
	@title = "Please login or register"
	erb :login
end

post '/chat/login' do
	@handle = params['handle']
	@password = params['password']
	@users = YAML::Store.new 'users.yml'
	@users.transaction do
		if (@users[@handle] && @users[@handle] != @password)
			puts "#{@handle}: Wrong Password"
			@title = 'Wrong Password'
			erb :error
		elsif (!@users[@handle])
			@users[@handle] = @password
			@title = "Welcome newcomer #{@handle}!"
			erb :loginSuccess
		elsif (@users[@handle] == @password)	
			@title = "Welcome back #{@handle}!"
			erb :loginSuccess
		end
	end
end
