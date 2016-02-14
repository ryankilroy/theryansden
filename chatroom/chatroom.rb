require 'sinatra'
require 'yaml/store'
require 'cgi'

get '/' do
	@title = "Welcome to The Ryan's Den"
	erb :index
end

get '/chat' do
	cgi = CGI.new("html4")
	cookie = cgi.cookies['session_cookie']
	puts "cookie: "
   	puts cookie
	cgi.out('cookie' => cookie) do
		cgi.head + cgi.body { cookie[0] }
	end

	@title = "Please login or register"
	erb :login
end

get '/chat/signup' do
	@handle = params['handle']
	@users = YAML::Store.new 'users.yml'
	@users.transaction do
		if (@users[@handle])
			puts "#{@handle} already exists"
			@title = 'User exists'
			erb :error
		else
			@password = params['password']
			@users[@handle] = @password
			@title = "Welcome to the club #{@handle}!"
			erb :loginSuccess
		end
	end
end

post '/chat/login' do
	@handle = params['handle']
	@password = params['password']
	@users = YAML::Store.new 'users.yml'
	@users.transaction do
		if (!@users[@handle])
			puts "#{@handle} does not exist, creating user"
			@users[@handle] = @password
			#redirect_to '/signup'
		elsif (@users[@handle] && @users[@handle] != @password)
			puts "#{@handle}: Wrong Password"
			@title = 'Wrong Password'
			erb :error
		elsif (@users[@handle] == @password)	
			@title = "Welcome back #{@handle}!"
			cgi = CGI.new("html4")
			cookie = CGI::Cookie.new('name' => 'session_cookie',
									 'value' => @handle,
									 'expires' => Time.now + 60)
			cgi.out('cookie' => cookie) do
				cgi.head + cgi.body { "#{cookie} stored"}
			end
			#erb :loginSuccess
		end
	end
end
